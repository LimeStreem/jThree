bool shouldEqual(float actual,float ideal){
  if(_isCheckPass){
    gl_FragColor = actual == ideal ? vec3(0,0,0) : vec3(1,0,0);
    return actual == ideal;
  }else{
    gl_FragColor.r = actual;
    return false;
  }
}

bool shouldEqual(vec2 actual,vec2 ideal){
  if(_isCheckPass){
    gl_FragColor = actual == ideal ? vec3(0,0,0) : vec3(1,0,0);
    return actual == ideal;
  }else{
    gl_FragColor.rg = actual;
    return false;
  }
}
