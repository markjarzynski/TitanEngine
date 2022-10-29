if(${CMAKE_SYSTEM_NAME} MATCHES "Darwin")
    add_definitions(-DMACOS)
elseif(${CMAKE_SYSTEM_NAME} MATCHES "Linux")
    add_definitions(-DLINUX)
elseif(${CMAKE_SYSTEM_NAME} MATCHES "Windows")
    add_definitions(-DWindows)
endif()

set(GraphicsAPI "Vulkan" CACHE STRING "Graphics API")
set_property(CACHE GraphicsAPI PROPERTY STRINGS "Vulkan" "Direct3D12" "Metal")

if(GraphicsAPI MATCHES "Vulkan")
    add_definitions(-DVULKAN)
endif()

message(STATUS TEST ${GraphicsAPI})