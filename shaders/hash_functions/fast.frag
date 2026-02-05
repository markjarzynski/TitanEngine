#version 450

layout(location = 0) out vec4 outColor;

// UE4's RandFast function
// https://github.com/EpicGames/UnrealEngine/blob/release/Engine/Shaders/Private/Random.ush
float fast(vec2 v)
{
    v = (1./4320.) * v + vec2(0.25,0.);
    float state = fract( dot( v * v, vec2(3571)));
    return fract( state * state * (3571. * 2.));
}

void main() {

    vec2 v = gl_FragCoord.xy;
    
    for (int i = 0; i < 10000; i++)
    {
        v.x = fast(v.xy);
    }

    vec3 color = v.xxx;
    outColor = vec4(color, 1.0);
}