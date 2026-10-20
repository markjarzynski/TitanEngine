#version 450

layout(location = 0) out vec4 outColor;

void main()
{

    uvec4 v = uvec4(gl_FragCoord.xyzw);

    for (int i = 0; i < 10000; i++)
    {
        v.z = (v.y >> ((v.y >> 28u) + 4u)) ^ v.y;
        v.w = (v.z >> ((v.z >> 28u) + 4u)) ^ v.z;
        v.x = (v.w >> ((v.w >> 28u) + 4u)) ^ v.w;
        v.y = (v.x >> ((v.x >> 28u) + 4u)) ^ v.x;
    }

    vec4 color = vec4(v.xyzw) * (1.f / 0xFFFFFFFFu);
    outColor = color;
}
