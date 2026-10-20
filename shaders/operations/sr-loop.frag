#version 450

layout(location = 0) out vec4 outColor;

void main()
{

    uvec4 v = uvec4(gl_FragCoord.xyzw);

    for (int i = 0; i < 10000; i++)
    {
        v.z = v.x >> 1;
        v.w = v.y >> 2;
        v.x = v.z >> 3;
        v.y = v.w >> 4;
    }

    vec4 color = vec4(v.xyzw) * (1.f / 0xFFFFFFFFu);
    outColor = color;
}
