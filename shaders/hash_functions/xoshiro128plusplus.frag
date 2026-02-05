#version 450

layout(location = 0) out vec4 outColor;

uint rotl(uint x, uint r)
{
	return (x << r) | (x >> (32u - r));
}

// https://prng.di.unimi.it/
uint xoshiro128plusplus(uvec4 s)
{
	uint t = s[1] << 9;

	s[2] ^= s[0];
	s[3] ^= s[1];
	s[1] ^= s[2];
	s[0] ^= s[3];

	s[2] ^= t;

	s[3] = rotl(s[3], 11u);

	return rotl(s[0] + s[3], 7u) + s[0];
}

void main() {

    uvec4 v = uvec4(gl_FragCoord.xyzw);
    
    for (int i = 0; i < 10000; i++)
    {
        v.x = xoshiro128plusplus(v);
    }

    vec3 color = vec3(v.xxx) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(color, 1.0);
}