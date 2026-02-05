#version 450

layout(location = 0) out vec4 outColor;

// https://github.com/skeeto/hash-prospector/issues/19#issuecomment-1120105785
uint prospector_best(uint x)
{
    x = (x ^ (x >> 16)) * 0x21f0aaadU;
    x = (x ^ (x >> 15)) * 0x735a2d97U;
    return x ^ (x >> 15);
}


void main() {

    uvec2 v = uvec2(gl_FragCoord.xy);

    for (int i = 0; i < 10000; i++)
    {
        v.x = prospector_best(prospector_best(v.x) + v.y);
    }

    vec3 color = vec3(v.xxx) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(color, 1.0);
}