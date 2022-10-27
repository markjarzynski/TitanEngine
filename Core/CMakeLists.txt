cmake_minimum_required(VERSION 3.20)

project("Core" LANGUAGES CXX)

file(GLOB SourceFiles LIST_DIRECTORIES FALSE
    "${CMAKE_CURRENT_SOURCE_DIR}/*.h"
    "${CMAKE_CURRENT_SOURCE_DIR}/*.cpp"
)

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

target_link_libraries(${PROJECT_NAME})

set_property(DIRECTORY PROPERTY VS_STARTUP_PROJECT ${PROJECT_NAME})