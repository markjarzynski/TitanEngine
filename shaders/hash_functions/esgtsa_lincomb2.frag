#version 450

layout(location = 0) out vec4 outColor;

uint lincomb(uvec2 v) {
    return 1664525u * v.x + 16807u * v.y + 1013904223u;
}

// Schechter and Bridson hash 
// https://www.cs.ubc.ca/~rbridson/docs/schechter-sca08-turbulence.pdf
uint esgtsa(uint s)
{
    s = (s ^ 2747636419u) * 2654435769u;// % 4294967296u;
    s = (s ^ (s >> 16u)) * 2654435769u;// % 4294967296u;
    s = (s ^ (s >> 16u)) * 2654435769u;// % 4294967296u;
    return s;
}

void main() {

    uvec2 v = uvec2(gl_FragCoord.xy);
    
    for (int i = 0; i < 10000; i++)
    {
        v.x = esgtsa(lincomb(v.xy));
    }

    vec3 hash = vec3(v.xxx) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(hash, 1.0);
}