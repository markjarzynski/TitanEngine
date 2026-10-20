#version 450

layout(location = 0) out vec4 outColor;

void main()
{

    uvec4 v = uvec4(gl_FragCoord.xyzw);

    for (int i = 0; i < 10000; i++)
    {
        v.z = (v.y >> 16) | (v.y << (32 - 16));
        v.w = (v.z >> 8) | (v.z << (32 - 8));
        v.x = (v.w >> 16) | (v.w << (32 - 16));
        v.y = (v.x >> 24) | (v.x << (32 - 24));
    }

    vec4 color = vec4(v.xyzw) * (1.f / 0xFFFFFFFFu);
    outColor = color;
}
