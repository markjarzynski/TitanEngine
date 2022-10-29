cmake_minimum_required(VERSION 3.20)

project("Graphics" LANGUAGES CXX)

set(SourceFiles
    "${CMAKE_CURRENT_SOURCE_DIR}/Window.h"
    "${CMAKE_CURRENT_SOURCE_DIR}/Window.cpp"
)

set(PrivateLibraries
    "glfw"
    "Titan::Core"
)

if(GraphicsAPI MATCHES "Vulkan")
    list(APPEND SourceFiles
        "${CMAKE_CURRENT_SOURCE_DIR}/Vulkan.h"
        "${CMAKE_CURRENT_SOURCE_DIR}/Vulkan.cpp"
    )
    list(APPEND PrivateLibraries
        "Vulkan::Vulkan"
    )
elseif(GraphicsAPI MATCHES "D3D12")
    list(APPEND SourceFiles
        "${CMAKE_CURRENT_SOURCE_DIR}/Direct3D12.h"
        "${CMAKE_CURRENT_SOURCE_DIR}/Direct3D12.cpp"
    )
elseif(GraphicsAPI MATCHES "Metal")
    list(APPEND SourceFiles
        "${CMAKE_CURRENT_SOURCE_DIR}/Metal.h"
        "${CMAKE_CURRENT_SOURCE_DIR}/Metal.cpp"
    )
endif()



add_library(${PROJECT_NAME}
STATIC 
    ${SourceFiles}
)
add_library("Titan::${PROJECT_NAME}" ALIAS ${PROJECT_NAME})

target_sources(${PROJECT_NAME}
PRIVATE
    ${SourceFiles}
)

set_target_properties(${PROJECT_NAME} 
PROPERTIES 
    LINKER_LANGUAGE CXX 
    FOLDER "Titan"
)

include_directories(${Core_SOURCE_DIR})

target_link_libraries( ${PROJECT_NAME}
PRIVATE
    ${PrivateLibraries}
)

message(STATUS ${PrivateLibraries})

set_property(DIRECTORY PROPERTY VS_STARTUP_PROJECT ${PROJECT_NAME})