#version 450

layout(location = 0) out vec4 outColor;

// Integer Hash - III
// - Inigo Quilez, Integer Hash - III, 2017
//   https://www.shadertoy.com/view/4tXyWN
uint iqint3(uvec2 x)
{
    uvec2 q = 1103515245U * ( (x>>1U) ^ (x.yx   ) );
    uint  n = 1103515245U * ( (q.x  ) ^ (q.y>>3U) );

    return n;
}

vec2 hash2(uvec2 v)
{
    //return hash3(v.xyy).xy;
    return vec2((uvec2(iqint3(v)) >> uvec2(31,30)) & uvec2(1,1)) * 2.0 - 1.0;
    //return vec2((uvec2(lcg(lcg(v.x) + v.y)) >> uvec2(31,30)) & uvec2(1,1)) * 2.0 - 1.0;
    //return vec2(lcg(seed(v)) & uvec2(31,30)) * vec2(2,1) - 1.0;
    //return vec2((uvec2(hash3(v.xyy).xy) >> uvec2(31,30)) & uvec2(1,1)) * 2.0 - 1.0;
}

float noise(vec2 v)
{
    uvec2 vi = uvec2(v);
    vec2 vf = fract(v);
    vec2 t = smoothstep(0.,1., vf);
    
    float n00 = dot(hash2(vi + uvec2(0,0)), vf - vec2(0,0));
    float n01 = dot(hash2(vi + uvec2(1,0)), vf - vec2(1,0));
    float n10 = dot(hash2(vi + uvec2(0,1)), vf - vec2(0,1));
    float n11 = dot(hash2(vi + uvec2(1,1)), vf - vec2(1,1));
    
    float n0 = mix(n00,n10, t.y);
    float n1 = mix(n01,n11, t.y);
    
    return mix(n0,n1, t.x);
}

void main() {

    vec2 v = gl_FragCoord.xy;

    vec3 color = noise(v).xxx;
    outColor = vec4(color, 1.0);
}