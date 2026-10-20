#version 450
#include "../random.glsl"

layout(location = 0) out vec4 outColor;

void main()
{

    uvec4 v = uvec4(gl_FragCoord.xyzw);

    for (int i = 0; i < LOOP_1; i++)
    {
        v.x = v.y & v.z;
        v.y = v.z & v.w;
        v.z = v.w & v.x;
        v.w = v.x & v.y;
        v.x = v.y & v.z;
        v.y = v.z & v.w;
        v.z = v.w & v.x;
    }

    vec4 color = vec4(v.xyzw) * (1.f / 0xFFFFFFFFu);
    outColor = color;
}
