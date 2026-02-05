#version 450

layout(location = 0) out vec4 outColor;

// convert 2D seed to 1D
// 2 imad
uint seed(uvec2 p) {
    return 19u * p.x + 47u * p.y + 101u;
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
        v.x = esgtsa(seed(v.xy));
    }

    vec3 hash = vec3(v.xxx) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(hash, 1.0);
}