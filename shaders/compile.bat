glslc.exe shader.vert -o vert.spv
glslc.exe shader.frag -o frag.spv

CD hash_functions
for %%f in (*.frag) do (
    glslc.exe %%f -o %%~nf.spv
)
CD ..

MD ..\build\Debug\shaders
MOVE *.spv ..\build\Debug\shaders

MD ..\build\Debug\shaders\hash_functions
MOVE hash_functions\*.spv ..\build\Debug\shaders\hash_functions