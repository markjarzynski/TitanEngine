#version 450
#include "../random.glsl"

layout(location = 0) out vec4 outColor;

void main()
{

    uvec4 v = uvec4(gl_FragCoord.xyzw);

    for (int i = 0; i < LOOP_1; i++)
    {
        v.x = v.y * v.z + v.w;
        v.x = v.x ^ (v.x >> 16);

        //v.y = v.z * v.w + v.x;
        //v.y = v.y ^ (v.y << 16);

        //v.z = v.w * v.x + v.y;
        //v.z = v.z ^ (v.z >> 16);

        //v.w = v.x * v.y + v.z;
        //v.w = v.w ^ (v.w << 16);
    }

    vec4 color = vec4(v.xyzw) * (1.f / 0xFFFFFFFFu);
    outColor = color;
}
