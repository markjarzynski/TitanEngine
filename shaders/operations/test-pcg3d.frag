#version 450

layout(location = 0) out vec4 outColor;

void main()
{
    uvec4 v = uvec4(gl_FragCoord.xyzw);

    for(int i = 0; i < 1000; i++)
    {
        v.x = (v.x * 1664525) + 1013904223;
        v.y = (v.y * 1664525) + 1013904223;
        v.z = (v.z * 1664525) + 1013904223;
        v.x = (v.y * v.z) + v.x;
        v.y = (v.z * v.x) + v.y;
        v.z = (v.x * v.y) + v.z;
        v.x = v.x ^ (v.x >> 16);
        v.y = v.y ^ (v.y >> 16);
        v.z = v.z ^ (v.z >> 16);
        v.x = (v.y * v.z) + v.x;
        v.y = (v.z * v.x) + v.y;
        v.z = (v.x * v.y) + v.z;
    }

    vec4 color = vec4(v.xyzw) * (1.f / 0xFFFFFFFFu);
    outColor = color;
}