#version 450

layout(location = 0) out vec4 outColor;

void main()
{
    uvec4 v = uvec4(gl_FragCoord.xyzw);
    vec4 color = vec4(v.xyzw) * (1.f / 0xFFFFFFFFu);

    for (int i = 0; i < 10000; i++)
    {
        ;
    }

    outColor = color;
}