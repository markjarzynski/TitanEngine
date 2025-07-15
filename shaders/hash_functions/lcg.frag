#version 450

layout(location = 0) out vec4 outColor;

uint lcg(uint v) {

    v = v * 1664525u + 1013904223u;

    return v;
}

void main() {

    uvec3 v = uvec3(gl_FragCoord.xyz);
    vec3 hash = vec3(lcg(lcg(v.x) + v.y)) * (1.f / 0xFFFFFFFFu);

    hash = vec3(1,0,0);
    outColor = vec4(hash, 1.0);
}