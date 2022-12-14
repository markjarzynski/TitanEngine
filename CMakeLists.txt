cmake_minimum_required(VERSION 3.20)

# set the project name and version
project(TitanEngine VERSION 0.2)

# specify the C++ standard
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQURIED True)

configure_file(Config.h.in Config.h)

set(CMAKE_MODULE_PATH "${CMAKE_SOURCE_DIR}/CMake" ${CMAKE_MODULE_PATH})
message(STATUS "CMAKE_MODULE_PATH: ${CMAKE_MODULE_PATH}")

include("Platform")

# glm
add_subdirectory("Common/ThirdParty/glm")
find_package(GLM REQUIRED)
include_directories(${PROJECT_NAME} PUBLIC ${GLM_INCLUDE_DIRS})

# vulkan
if(GraphicsAPI MATCHES "Vulkan")
    find_package(Vulkan REQUIRED)
endif()

# glfw
set(GLFW_BUILD_DOCS OFF CACHE BOOL "" FORCE)
set(GLFW_BUILD_TESTS OFF CACHE BOOL "" FORCE)
set(GLFW_BUILD_EXAMPLES OFF CACHE BOOL "" FORCE)
add_subdirectory("Common/ThirdParty/glfw")

add_subdirectory("${CMAKE_CURRENT_SOURCE_DIR}/Core")
add_subdirectory("${CMAKE_CURRENT_SOURCE_DIR}/Graphics")

include_directories(${PROJECT_NAME}
    ${CMAKE_CURRENT_BINARY_DIR}
    ${CMAKE_CURRENT_SOURCE_DIR}/Core
    ${CMAKE_CURRENT_SOURCE_DIR}/Graphics
)

add_executable(${PROJECT_NAME} 
    TitanEngine.cpp App.cpp
)

set(PrivateLibraries
    "glfw"
    "Titan::Core"
    "Titan::Graphics"
)

if(GraphicsAPI MATCHES "Vulkan")
list(APPEND PrivateLibraries
    "Vulkan::Vulkan"
)
endif()

message(STATUS ${PrivateLibraries})

target_link_libraries( ${PROJECT_NAME}
PRIVATE
    ${PrivateLibraries}
)



