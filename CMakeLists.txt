cmake_minimum_required(VERSION 3.20)

# set the project name and version
project(NewEngine VERSION 0.1)

# specify the C++ standard
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQURIED True)

configure_file(NewEngineConfig.h.in NewEngineConfig.h)

set(CMAKE_MODULE_PATH "${CMAKE_SOURCE_DIR}/CMake" ${CMAKE_MODULE_PATH})
message(STATUS "CMAKE_MODULE_PATH: ${CMAKE_MODULE_PATH}")

# glm
add_subdirectory("Common/ThirdParty/glm")
find_package(GLM REQUIRED)
include_directories(${PROJECT_NAME} PUBLIC ${GLM_INCLUDE_DIRS})

# vulkan
find_package(Vulkan REQUIRED)
link_directories(${Vulkan_INCLUDE_DIR}/../Bin ${Vulkan_INCLUDE_DIR}/../Lib)

# glfw
set(GLFW_BUILD_DOCS OFF CACHE BOOL "" FORCE)
set(GLFW_BUILD_TESTS OFF CACHE BOOL "" FORCE)
set(GLFW_BUILD_EXAMPLES OFF CACHE BOOL "" FORCE)
add_subdirectory("Common/ThirdParty/glfw")


include_directories(${PROJECT_NAME} ${CMAKE_CURRENT_BINARY_DIR})
add_executable(${PROJECT_NAME} NewEngine.cpp NewEngineApp.h NewEngineApp.cpp NewEngineWindow.h NewEngineWindow.cpp NewEngineVulkan.h NewEngineVulkan.cpp)

target_include_directories(${PROJECT_NAME} PUBLIC "${Vulkan_INCLUDE_DIRS}")
target_link_libraries(${PROJECT_NAME} glfw vulkan-1)
