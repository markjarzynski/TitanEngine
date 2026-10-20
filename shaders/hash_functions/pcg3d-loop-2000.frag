#version 450
#include "../random.glsl"

layout(location = 0) out vec4 outColor;

void main() {

    uvec3 v = uvec3(gl_FragCoord.xyz);
    
    for (int i = 0; i < 2000; i++)
    {
        v = pcg3d(v);
    }

    vec3 hash = vec3(v) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(hash, 1.0);
}