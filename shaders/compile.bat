glslc.exe shader.vert -o vert.spv
glslc.exe shader.frag -o frag.spv

CD hash_functions
for %%f in (*.frag) do (
    glslc.exe %%f -o %%~nf.spv
)
CD ..

MD ..\build\shaders
MOVE *.spv ..\build\shaders

MD ..\build\shaders\hash_functions
DEL ..\build\shaders\hash_functions\*.spv
MOVE hash_functions\*.spv ..\build\shaders\hash_functions