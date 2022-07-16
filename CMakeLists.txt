cmake_minimum_required(VERSION 3.20)

# set the project name and version
project(NewEngine VERSION 0.1)

# specify the C++ standard
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQURIED True)

configure_file(NewEngineConfig.h.in NewEngineConfig.h)

set(CMAKE_MODULE_PATH "${CMAKE_SOURCE_DIR}/CMake" ${CMAKE_MODULE_PATH})
message(STATUS "CMAKE_MODULE_PATH: ${CMAKE_MODULE_PATH}")

include_directories(${PROJECT_NAME} ${CMAKE_CURRENT_BINARY_DIR})
add_executable(${PROJECT_NAME} NewEngine.cpp)
