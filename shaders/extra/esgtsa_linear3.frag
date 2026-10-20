#version 450

layout(location = 0) out vec4 outColor;

// convert 3D seed to 1D
uint seed(uvec3 p) {
    return 19u * p.x + 47u * p.y + 101u * p.z + 131u;
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

    uvec3 v = uvec3(gl_FragCoord.xyz);
    
    for (int i = 0; i < 10000; i++)
    {
        v.x = esgtsa(seed(v.xyz));
    }

    vec3 hash = vec3(v.xxx) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(hash, 1.0);
}