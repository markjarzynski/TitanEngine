#version 450

layout(location = 0) out vec4 outColor;

// convert 2D seed to 1D
// 2 imad
uint seed(uvec2 p) {
    return 19u * p.x + 47u * p.y + 101u;
}

// https://github.com/skeeto/hash-prospector/issues/23#issuecomment-1401616701
uint pxq(uint v)
{
    uint state = (v | 1u) ^ (v * v);
    uint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;
    return (word >> 22u) ^ word;
}


void main() {

    uvec2 v = uvec2(gl_FragCoord.xy);

    for (int i = 0; i < 10000; i++)
    {
        v.x = pxq(seed(v));
    }

    vec3 color = vec3(v.xxx) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(color, 1.0);
}