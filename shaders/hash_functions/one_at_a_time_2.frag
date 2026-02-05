#version 450

layout(location = 0) out vec4 outColor;

// https://www.burtleburtle.net/bob/hash/doobs.html
uint one_at_a_time_2(uvec2 key)
{
    uint hash = 0u;
    
    for (int i = 0; i < 2; ++i)
    {
        hash += key[i];
        hash += (hash << 10);
        hash ^= (hash >> 6);
    }
    hash += (hash << 3);
    hash ^= (hash >> 11);
    hash += (hash << 15);
    return hash;
}


void main() {

    uvec2 v = uvec2(gl_FragCoord.xy);
    
    for (int i = 0; i < 10000; i++)
    {
        v.x = one_at_a_time_2(v);
    }

    vec3 color = vec3(v.xxx) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(color, 1.0);
}