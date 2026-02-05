#version 450

layout(location = 0) out vec4 outColor;

uvec2 pcg2d(uvec2 v)
{
    v = v * 1664525u + 1013904223u;

    v.x += v.y * 1664525u;
    v.y += v.x * 1664525u;

    v = v ^ (v>>16u);

    v.x += v.y * 1664525u;
    v.y += v.x * 1664525u;

    v = v ^ (v>>16u);

    return v;
}

void main() {

    uvec2 v = uvec2(gl_FragCoord.xy);
    
    for (int i = 0; i < 10000; i++)
    {
        v = pcg2d(v);
    }

    vec2 color = vec2(v) * (1.f / 0xFFFFFFFFu);
    outColor = vec4(color, 0.0, 1.0);
}