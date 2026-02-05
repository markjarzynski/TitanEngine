#version 450

layout(location = 0) out vec4 outColor;

// common GLSL hash
//  - Rey, On generating random numbers, with help of y= [(a+x)sin(bx)] mod 1,
//    22nd European Meeting of Statisticians and the 7th Vilnius Conference on
//    Probability Theory and Mathematical Statistics, August 1998
float trig(vec2 p)
{
    return fract(43757.5453*sin(dot(p, vec2(12.9898,78.233))));
}

void main() {

    vec2 v = gl_FragCoord.xy;
    
    for (int i = 0; i < 10000; i++)
    {
        v.x = trig(v);
    }

    vec3 color = v.xxx;
    outColor = vec4(color, 1.0);
}