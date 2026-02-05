#version 450

layout(location = 0) out vec4 outColor;

// 128-bit xorshift
//  - Marsaglia, Xorshift RNGs, Journal of Statistical Software, v8n14, 2003
uint xorshift128(uvec4 v)
{
    v.w ^= v.w << 11u;
    v.w ^= v.w >> 8u;
    v = v.wxyz;
    v.x ^= v.y;
    v.x ^= v.y >> 19u;
    return v.x;
}

void main() {

    uvec4 v = uvec4(gl_FragCoord.xyzw);
    
    for (int i = 0; i < 10000; i++)
    {
        v.x = xorshift128(v);
    }

    vec3 color = vec3(v.xxx) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(color, 1.0);
}