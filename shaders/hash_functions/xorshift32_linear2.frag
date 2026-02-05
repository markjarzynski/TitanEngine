#version 450

layout(location = 0) out vec4 outColor;

// convert 2D seed to 1D
// 2 imad
uint seed(uvec2 p) {
    return 19u * p.x + 47u * p.y + 101u;
}

// 32-bit xorshift
//  - Marsaglia, Xorshift RNGs, Journal of Statistical Software, v8n14, 2003
uint xorshift32(uint v)
{
    v ^= v << 13u;
    v ^= v >> 17u;
    v ^= v << 5u;
    return v;
}

void main() {

    uvec2 v = uvec2(gl_FragCoord.xy);

    for (int i = 0; i < 10000; i++)
    {
        v.x = xorshift32(seed(v));
    }

    vec3 color = vec3(v.xxx) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(color, 1.0);
}