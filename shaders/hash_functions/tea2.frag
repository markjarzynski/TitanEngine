#version 450

layout(location = 0) out vec4 outColor;

// Tiny Encryption Algorithm
//  - Zafar et al., GPU random numbers via the tiny encryption algorithm, HPG 2010
uvec2 tea(int tea, uvec2 p) {
    uint s = 0u;

    for( int i = 0; i < tea; i++) {
        s += 0x9E3779B9u;
        p.x += (p.y<<4u)^(p.y+s)^(p.y>>5u);
        p.y += (p.x<<4u)^(p.x+s)^(p.x>>5u);
    }
    return p.xy;
}

void main() {

    uvec2 v = uvec2(gl_FragCoord.xy);
    
    for (int i = 0; i < 10000; i++)
    {
        v = tea(2, v);
    }

    vec2 color = vec2(v) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(color, 0.0, 1.0);
}