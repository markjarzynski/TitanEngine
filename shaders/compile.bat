C:/VulkanSDK/1.3.224.1/Bin/glslc.exe shader.vert -o vert.spv
C:/VulkanSDK/1.3.224.1/Bin/glslc.exe shader.frag -o frag.spv

MD ..\build\Debug\shaders
MOVE *.spv ..\build\Debug\shaders