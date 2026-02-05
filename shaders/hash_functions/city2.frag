#version 450

layout(location = 0) out vec4 outColor;

#define c1 0xcc9e2d51u
#define c2 0x1b873593u

uint rotr(uint x, uint r)
{
	return (x >> r) | (x << (32u - r));
}

uint fmix(uint h)
{
    h ^= h >> 16;
    h *= 0x85ebca6bu;
    h ^= h >> 13;
    h *= 0xc2b2ae35u;
    h ^= h >> 16;
    return h;
}

uint mur(uint a, uint h) {
    // Helper from Murmur3 for combining two 32-bit values.
    a *= c1;
    a = rotr(a, 17u);
    a *= c2;
    h ^= a;
    h = rotr(h, 19u);
    return h * 5u + 0xe6546b64u;
}

uint bswap32(uint x) {
    return (((x & 0x000000ffu) << 24) |
            ((x & 0x0000ff00u) <<  8) |
            ((x & 0x00ff0000u) >>  8) |
            ((x & 0xff000000u) >> 24));
}

// CityHash32, adapted from Hash32Len5to12 in https://github.com/google/cityhash
uint city(uvec2 s)
{
    uint len = 8u;
    uint a = len, b = len * 5u, c = 9u, d = b;

    a += bswap32(s.x);
    b += bswap32(s.y);
    c += bswap32(s.y);

    return fmix(mur(c, mur(b, mur(a, d))));
}

void main() {

    uvec2 v = uvec2(gl_FragCoord.xy);
    
    for (int i = 0; i < 10000; i++)
    {
        v.x = city(v);
    }

    vec3 color = vec3(v.xxx) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(color, 1.0);
}