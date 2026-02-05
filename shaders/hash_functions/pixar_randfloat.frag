#version 450

layout(location = 0) out vec4 outColor;

// https://graphics.pixar.com/library/MultiJitteredSampling/paper.pdf
//float pixar_randfloat(uvec2 v)
uint pixar_randfloat(uvec2 v)
{
    v.y *= 0xa399d265u; // 0x711ad6a5u

    v.x ^= v.y;
    v.x ^= v.x >> 17u;
    v.x ^= v.x >> 10u; v.x *= 0xb36534e5u;
    v.x ^= v.x >> 12u;
    v.x ^= v.x >> 21u; v.x *= 0x93fc4795u;
    v.x ^= 0xdf6e307fu;
    v.x ^= v.x >> 17; v.x *= 1u | v.y >> 18u;
    //return float(v.x) * (1.0f / 4294967808.f);
    return v.x;
}


void main() {

    uvec2 v = uvec2(gl_FragCoord.xy);

    for (int i = 0; i < 10000; i++)
    {
        v.x = pixar_randfloat(v.xy);
    }

    vec3 color = vec3(v.xxx) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(color, 1.0);
}