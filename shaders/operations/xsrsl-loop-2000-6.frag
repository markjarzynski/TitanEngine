#version 450
#include "../random.glsl"

layout(location = 0) out vec4 outColor;

void main()
{

    uvec4 v = uvec4(gl_FragCoord.xyzw);

    for (int i = 0; i < LOOP_2; i++)
    {
        v.z = v.x ^ (v.y >> v.z);
        v.w = v.y ^ (v.z << v.x);
        v.x = v.z ^ (v.w >> v.y);
        v.y = v.w ^ (v.x << v.z);
        v.z = v.x ^ (v.y >> v.z);
        v.w = v.y ^ (v.z << v.x);
        //v.x = v.z ^ (v.w >> v.y);
        //v.y = v.w ^ (v.x << v.z);
    }

    vec4 color = vec4(v.xyzw) * (1.f / 0xFFFFFFFFu);
    outColor = color;
}
