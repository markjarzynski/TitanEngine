#version 450

layout(location = 0) out vec4 outColor;

void main()
{

    uvec4 v = uvec4(gl_FragCoord.xyzw);

    for (int i = 0; i < 10000; i++)
    {
        v.z = v.x + 1664525u;
        v.w = v.y + 1013904223u;
        v.x = v.z + 22695477u;
        v.y = v.w + 1103515245u;
    }

    vec4 color = vec4(v.xyzw) * (1.f / 0xFFFFFFFFu);
    outColor = color;
}
