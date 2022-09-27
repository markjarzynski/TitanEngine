glslc shader.vert -o vert.spv
glslc shader.frag -o frag.spv

mkdir -p ../build/shaders
mv *.spv ../build/shaders
