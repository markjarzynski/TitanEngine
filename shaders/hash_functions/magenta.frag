#version 450

layout(location = 0) out vec4 outColor;

uvec3 magenta(uvec3 v)
{
    return uvec3(0xFFFFFFFFu, v.y, 0xFFFFFFFFu);
}

void main() {

    uvec3 v = uvec3(gl_FragCoord.xyz);

    for (int i = 0; i < 10000; i++)
    {
        v = magenta(v);
    }

    vec3 color = v * (1.f / 0xFFFFFFFFu);
    outColor = vec4(color, 1.0);
}