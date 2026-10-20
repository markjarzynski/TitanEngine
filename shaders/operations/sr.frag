#version 450

layout(location = 0) out vec4 outColor;

void main()
{
    uvec4 v = uvec4(gl_FragCoord.xyzw);

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    v.z = v.x >> v.y;
    v.w = v.y >> v.z;
    v.x = v.z >> v.w;
    v.y = v.w >> v.x;

    vec4 color = vec4(v.xyzw) * (1.f / 0xFFFFFFFFu);
    outColor = color;
}
