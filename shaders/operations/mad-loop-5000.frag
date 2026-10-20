#version 450

layout(location = 0) out vec4 outColor;

void main()
{

    uvec4 v = uvec4(gl_FragCoord.xyzw);

    for (int i = 0; i < 5000; i++)
    {
        v.z = v.x * v.y + v.z;
        v.w = v.y * v.z + v.w;
        v.x = v.z * v.w + v.x;
        v.y = v.w * v.x + v.y;
    }

    vec4 color = vec4(v.xyzw) * (1.f / 0xFFFFFFFFu);
    outColor = color;
}
