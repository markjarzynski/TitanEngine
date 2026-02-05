#version 450

layout(location = 0) out vec4 outColor;

// http://www.jcgt.org/published/0009/03/02/
uvec3 pcg3d16(uvec3 v)
{
    v = v * 12829u + 47989u;

    v.x += v.y*v.z;
    v.y += v.z*v.x;
    v.z += v.x*v.y;

    v.x += v.y*v.z;
    v.y += v.z*v.x;
    v.z += v.x*v.y;

	v >>= 16u;

    return v;
}

void main() {

    uvec3 v = uvec3(gl_FragCoord.xyz);
    
    for (int i = 0; i < 10000; i++)
    {
        v = pcg3d16(v);
    }

    vec3 hash = vec3(v) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(hash, 1.0);
}