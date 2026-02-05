#version 450

layout(location = 0) out vec4 outColor;

uint lincomb(uvec2 v) {
    return 1664525u * v.x + 16807u * v.y + 1013904223u;
}

// Numerical Recipies 3rd Edition
uint ranlim32(uint j){
    uint u, v, w1, w2, x, y;

    v = 2244614371U;
    w1 = 521288629U;
    w2 = 362436069U;

    u = j ^ v;

    u = u * 2891336453U + 1640531513U;
    v ^= v >> 13; v ^= v << 17; v ^= v >> 5;
    w1 = 33378u * (w1 & 0xffffu) + (w1 >> 16);
    w2 = 57225u * (w2 & 0xffffu) + (w2 >> 16);

    v = u;

    u = u * 2891336453U + 1640531513U;
    v ^= v >> 13; v ^= v << 17; v ^= v >> 5;
    w1 = 33378u * (w1 & 0xffffu) + (w1 >> 16);
    w2 = 57225u * (w2 & 0xffffu) + (w2 >> 16);

    x = u ^ (u << 9); x ^= x >> 17; x ^= x << 6;
    y = w1 ^ (w1 << 17); y ^= y >> 15; y ^= y << 5;

    return (x + v) ^ (y + w2);
}

void main() {

    uvec2 v = uvec2(gl_FragCoord.xy);

    for (int i = 0; i < 10000; i++)
    {
        v.x = ranlim32(lincomb(v));
    }

    vec3 color = vec3(v.xxx) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(color, 1.0);
}