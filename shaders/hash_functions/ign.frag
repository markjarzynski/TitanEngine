#version 450

layout(location = 0) out vec4 outColor;

// Interleaved Gradient Noise
//  - Jimenez, Next Generation Post Processing in Call of Duty: Advanced Warfare
//    Advances in Real-time Rendering, SIGGRAPH 2014
float ign(vec2 v)
{
    vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
    return fract(magic.z * fract(dot(v, magic.xy)));
}

void main() {

    vec2 v = gl_FragCoord.xy;
    
    for (int i = 0; i < 10000; i++)
    {
        v.x = ign(v.xy);
    }

    vec3 color = v.xxx;
    outColor = vec4(color, 1.0);
}