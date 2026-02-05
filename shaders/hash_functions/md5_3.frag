#version 450

layout(location = 0) out vec4 outColor;

uint rotl(uint x, uint r)
{
	return (x << r) | (x >> (32u - r));
}

// MD5GPU
// https://www.microsoft.com/en-us/research/wp-content/uploads/2007/10/tr-2007-141.pdf
#define A0 0x67452301u
#define B0 0xefcdab89u
#define C0 0x98badcfeu
#define D0 0x10325476u

uint F(uvec3 v) { return (v.x & v.y) | (~v.x & v.z); }
uint G(uvec3 v) { return (v.x & v.z) | (v.y & ~v.z); }
uint H(uvec3 v) { return v.x ^ v.y ^ v.z; }
uint I(uvec3 v) { return v.y ^ (v.x | ~v.z); }

void FF(inout uvec4 v, inout uvec4 rotate, uint x, uint ac)
{
    v.x = v.y + rotl(v.x + F(v.yzw) + x + ac, rotate.x);

    rotate = rotate.yzwx;
    v = v.yzwx;
}

void GG(inout uvec4 v, inout uvec4 rotate, uint x, uint ac)
{
    v.x = v.y + rotl(v.x + G(v.yzw) + x + ac, rotate.x);

    rotate = rotate.yzwx;
    v = v.yzwx;
}

void HH(inout uvec4 v, inout uvec4 rotate, uint x, uint ac)
{
    v.x = v.y + rotl(v.x + H(v.yzw) + x + ac, rotate.x);

    rotate = rotate.yzwx;
    v = v.yzwx;
}

void II(inout uvec4 v, inout uvec4 rotate, uint x, uint ac)
{
    v.x = v.y + rotl(v.x + I(v.yzw) + x + ac, rotate.x);

    rotate = rotate.yzwx;
    v = v.yzwx;
}

uint K(uint i)
{
    return uint(abs(sin(float(i)+1.)) * float(0xffffffffu));
}

uvec4 md5(uvec4 u)
{
    uvec4 digest = uvec4(A0, B0, C0, D0);
    uvec4 r, v = digest;
    uint i = 0u;

	uint M[16];
	M[0] = u.x; M[1] = u.y;	M[2] = u.z;	M[3] = u.w;
	M[4] = 0u; M[5] = 0u; M[6] = 0u; M[7] = 0u; M[8] = 0u;
	M[9] = 0u; M[10] = 0u; M[11] = 0u; M[12] = 0u; M[13] = 0u;
	M[14] = 0u; M[15] = 0u;

    r = uvec4(7, 12, 17, 22);
    FF(v, r, M[0], K(i++));
    FF(v, r, M[1], K(i++));
    FF(v, r, M[2], K(i++));
    FF(v, r, M[3], K(i++));
    FF(v, r, M[4], K(i++));
    FF(v, r, M[5], K(i++));
    FF(v, r, M[6], K(i++));
    FF(v, r, M[7], K(i++));
    FF(v, r, M[8], K(i++));
    FF(v, r, M[9], K(i++));
    FF(v, r, M[10], K(i++));
    FF(v, r, M[11], K(i++));
    FF(v, r, M[12], K(i++));
    FF(v, r, M[13], K(i++));
    FF(v, r, M[14], K(i++));
    FF(v, r, M[15], K(i++));

    r = uvec4(5, 9, 14, 20);
    GG(v, r, M[1], K(i++));
    GG(v, r, M[6], K(i++));
    GG(v, r, M[11], K(i++));
    GG(v, r, M[0], K(i++));
    GG(v, r, M[5], K(i++));
    GG(v, r, M[10], K(i++));
    GG(v, r, M[15], K(i++));
    GG(v, r, M[4], K(i++));
    GG(v, r, M[9], K(i++));
    GG(v, r, M[14], K(i++));
    GG(v, r, M[3], K(i++));
    GG(v, r, M[8], K(i++));
    GG(v, r, M[13], K(i++));
    GG(v, r, M[2], K(i++));
    GG(v, r, M[7], K(i++));
    GG(v, r, M[12], K(i++));

    r = uvec4(4, 11, 16, 23);
    HH(v, r, M[5], K(i++));
    HH(v, r, M[8], K(i++));
    HH(v, r, M[11], K(i++));
    HH(v, r, M[14], K(i++));
    HH(v, r, M[1], K(i++));
    HH(v, r, M[4], K(i++));
    HH(v, r, M[7], K(i++));
    HH(v, r, M[10], K(i++));
    HH(v, r, M[13], K(i++));
    HH(v, r, M[0], K(i++));
    HH(v, r, M[3], K(i++));
    HH(v, r, M[6], K(i++));
    HH(v, r, M[9], K(i++));
    HH(v, r, M[12], K(i++));
    HH(v, r, M[15], K(i++));
    HH(v, r, M[2], K(i++));

    r = uvec4(6, 10, 15, 21);
    II(v, r, M[0], K(i++));
    II(v, r, M[7], K(i++));
    II(v, r, M[14], K(i++));
    II(v, r, M[5], K(i++));
    II(v, r, M[12], K(i++));
    II(v, r, M[3], K(i++));
    II(v, r, M[10], K(i++));
    II(v, r, M[1], K(i++));
    II(v, r, M[8], K(i++));
    II(v, r, M[15], K(i++));
    II(v, r, M[6], K(i++));
    II(v, r, M[13], K(i++));
    II(v, r, M[4], K(i++));
    II(v, r, M[11], K(i++));
    II(v, r, M[2], K(i++));
    II(v, r, M[9], K(i++));

    return digest + v;
}

void main() {

    uvec4 v = uvec4(gl_FragCoord.xyz, 0);
    
    for (int i = 0; i < 10000; i++)
    {
        v = md5(v);
    }

    vec4 color = vec4(v) * (1.f / 0xFFFFFFFFu);
    outColor = color;
}