#version 450

layout(location = 0) out vec4 outColor;

// UE4's PseudoRandom function
// https://github.com/EpicGames/UnrealEngine/blob/release/Engine/Shaders/Private/Random.ush
float pseudo(vec2 v) {
    v = fract(v/128.)*128. + vec2(-64.340622, -72.465622);
    return fract(dot(v.xyx * v.xyy, vec3(20.390625, 60.703125, 2.4281209)));
}

void main() {

    vec2 v = gl_FragCoord.xy;
    
    for (int i = 0; i < 10000; i++)
    {
        v.x = pseudo(v);
    }

    vec3 color = v.xxx;
    outColor = vec4(color, 1.0);
}