glslc.exe shader.vert -o vert.spv
glslc.exe shader.frag -o frag.spv

CD operations
for %%f in (*.frag) do (
    glslc.exe %%f -o %%~nf.spv
)
CD ..

MD ..\build\shaders
MOVE *.spv ..\build\shaders

MD ..\build\shaders\operations
DEL ..\build\shaders\operations\*.spv
MOVE operations\*.spv ..\build\shaders\operations