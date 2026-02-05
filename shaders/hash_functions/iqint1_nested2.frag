#version 450

layout(location = 0) out vec4 outColor;

// Integer Hash - I
// - Inigo Quilez, Integer Hash - I, 2017
//   https://www.shadertoy.com/view/llGSzw
uint iqint1(uint n)
{
    // integer hash copied from Hugo Elias
	n = (n << 13U) ^ n;
    n = n * (n * n * 15731U + 789221U) + 1376312589U;

    return n;
}

void main() {

    uvec3 v = uvec3(gl_FragCoord.xyz);
    
    for (int i = 0; i < 10000; i++)
    {
        v.x = iqint1(iqint1(v.x) + v.y);
    }

    vec3 color = vec3(v.xxx) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(color, 1.0);
}