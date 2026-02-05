#version 450

layout(location = 0) out vec4 outColor;

uint lcg(uint v) {

    v = v * 1664525u + 1013904223u;

    return v;
}

void main() {

    uvec2 v = uvec2(gl_FragCoord.xy);

    for (int i = 0; i < 10000; i++)
    {
        v.x = lcg(lcg(v.x) + v.y);
    }

    vec3 color = vec3(v.xxx) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(color, 1.0);
}