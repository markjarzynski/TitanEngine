#version 450

layout(location = 0) out vec4 outColor;

uint lincomb(uvec2 v) {
    return 1664525u * v.x + 16807u * v.y + 1013904223u;
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
        v.x = wang(lincomb(v));
    }

    vec3 hash = vec3(v.xxx) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(hash, 1.0);
}