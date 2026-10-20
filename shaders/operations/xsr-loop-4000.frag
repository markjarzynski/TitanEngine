#version 450

layout(location = 0) out vec4 outColor;

void main()
{

    uvec4 v = uvec4(gl_FragCoord.xyzw);

    for (int i = 0; i < 4000; i++)
    {
        v.z = v.x ^ (v.y >> 8);
        v.w = v.y ^ (v.z >> 16);
        v.x = v.z ^ (v.w >> 24);
        v.y = v.w ^ (v.x >> 16);
    }

    vec4 color = vec4(v.xyzw) * (1.f / 0xFFFFFFFFu);
    outColor = color;
}
