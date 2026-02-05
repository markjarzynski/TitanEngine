#version 450

layout(location = 0) out vec4 outColor;

uint rotl(uint x, uint r)
{
	return (x << r) | (x >> (32u - r));
}

// mix(a,b,c) from https://www.burtleburtle.net/bob/c/lookup3.c
uvec3 lookup3(uvec3 v)
{
    v.x -= v.z;  v.x ^= rotl(v.z, 4u);  v.z += v.y;
    v.y -= v.x;  v.y ^= rotl(v.x, 6u);  v.x += v.z;
    v.z -= v.y;  v.z ^= rotl(v.y, 8u);  v.y += v.x;
    v.x -= v.z;  v.x ^= rotl(v.z,16u);  v.z += v.y;
    v.y -= v.x;  v.y ^= rotl(v.x,19u);  v.x += v.z;
    v.z -= v.y;  v.z ^= rotl(v.y, 4u);  v.y += v.x;
    return v;
}

void main() {

    uvec3 v = uvec3(gl_FragCoord.xyz);
    
    for (int i = 0; i < 10000; i++)
    {
        v = lookup3(v);
    }

    vec3 hash = vec3(v) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(hash, 1.0);
}