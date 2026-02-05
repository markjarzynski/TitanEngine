#version 450

layout(location = 0) out vec4 outColor;

// convert 2D seed to 1D
// 2 imad
uint seed(uvec2 p) {
    return 19u * p.x + 47u * p.y + 101u;
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
        v.x = ranlim32(seed(v));
    }

    vec3 color = vec3(v.xxx) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(color, 1.0);
}