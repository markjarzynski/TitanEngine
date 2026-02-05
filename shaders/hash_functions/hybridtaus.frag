#version 450

layout(location = 0) out vec4 outColor;

uint taus(uint z, int s1, int s2, int s3, uint m)
{
	uint b = (((z << s1) ^ z) >> s2);
    return (((z & m) << s3) ^ b);
}

// Hybrid Taus
// https://developer.nvidia.com/gpugems/GPUGems3/gpugems3_ch37.html
uint hybridtaus(uvec4 z)
{
    z.x = taus(z.x, 13, 19, 12, 0xfffffffeu);
    z.y = taus(z.y, 2, 25, 4, 0xfffffff8u);
    z.z = taus(z.z, 3, 11, 17, 0xfffffff0u);
    z.w = z.w * 1664525u + 1013904223u;

    return z.x ^ z.y ^ z.z ^ z.w;
}

void main() {

    uvec4 v = uvec4(gl_FragCoord.xyzw);
    
    for (int i = 0; i < 10000; i++)
    {
        v.x = hybridtaus(v);
    }

    vec3 color = vec3(v.xxx) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(color, 1.0);
}