#version 450

layout(location = 0) out vec4 outColor;

// https://github.com/skeeto/hash-prospector/issues/23#issuecomment-1407393298
// https://www.shadertoy.com/view/dllSW7
uint newintegerhash(uint x)
{
    x ^= x >> 15;
    x ^= (x * x) | 1u;
    x ^= x >> 17;
    x *= 0x9E3779B9u;
    x ^= x >> 13;
    return x;
}


void main() {

    uvec2 v = uvec2(gl_FragCoord.xy);

    for (int i = 0; i < 10000; i++)
    {
        v.x = newintegerhash(newintegerhash(v.x) + v.y);
    }

    vec3 color = vec3(v.xxx) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(color, 1.0);
}