#version 450

layout(location = 0) out vec4 outColor;

// http://www.jcgt.org/published/0009/03/02/
uvec3 pcg3d(uvec3 v) {

    v = v * 1664525u + 1013904223u;

    v.x += v.y*v.z;
    v.y += v.z*v.x;
    v.z += v.x*v.y;

    v ^= v >> 16u;

    v.x += v.y*v.z;
    v.y += v.z*v.x;
    v.z += v.x*v.y;

    return v;
}

void main() {

    uvec3 v = uvec3(gl_FragCoord.xyz);
    vec3 hash = vec3(pcg3d(v)) * (1.f / 0xFFFFFFFFu);

    outColor = vec4(hash, 1.0);
}