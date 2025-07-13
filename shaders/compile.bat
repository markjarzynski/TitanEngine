glslc.exe shader.vert -o vert.spv
glslc.exe shader.frag -o frag.spv

MD ..\build\Debug\shaders
MOVE *.spv ..\build\Debug\shaders