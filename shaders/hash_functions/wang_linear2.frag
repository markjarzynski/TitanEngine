#version 450

layout(location = 0) out vec4 outColor;

// convert 2D seed to 1D
// 2 imad
uint seed(uvec2 p) {
    return 19u * p.x + 47u * p.y + 101u;
}

// Wang hash, described on http://burtleburtle.net/bob/hash/integer.html
// original page by Thomas Wang 404
uint wang(uint v)
{
    v = (v ^ 61u) ^ (v >> 16u);
    v *= 9u;
    v ^= v >> 4u;
    v *= 0x27d4eb2du;
    v ^= v >> 15u;
    return v;
}

void main() {

    uvec2 v = uvec2(gl_FragCoord.xy);

    for (int i = 0; i < 10000; i++)
    {
        v.x = wang(seed(v));
    }

    vec3 hash = vec3(v.xxx) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(hash, 1.0);
}