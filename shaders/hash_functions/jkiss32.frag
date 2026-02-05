#version 450

layout(location = 0) out vec4 outColor;

uint jkiss32(uvec2 p)
{
    uint x=p.x;//123456789;
    uint y=p.y;//234567891;

    uint z=345678912u,w=456789123u,c=0u;
    int t;
    y ^= (y<<5); y ^= (y>>7); y ^= (y<<22);
    t = int(z+w+c); z = w; c = uint(t < 0); w = uint(t&2147483647);
    x += 1411392427u;
    return x + y + w;
}


void main() {

    uvec2 v = uvec2(gl_FragCoord.xy);
    
    for (int i = 0; i < 10000; i++)
    {
        v.x = jkiss32(v);
    }

    vec3 color = vec3(v.xxx) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(color, 1.0);
}