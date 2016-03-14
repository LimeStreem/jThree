import glFactory from 'gl';
import fs from 'fs';
import test from 'ava';

const gl = glFactory(1, 1);
let initialized = false;
let baseFragment = "";

function readGLSL(fileName){
  return new Promise((resolve,reject)=>{
    fs.readFile(fileName,'utf8',(err,res)=>{
      if(err){
        reject(err);
      }else{
        resolve(res);
      }
    })
  });
}

async function initGLSLTest(){
  if(!initialized){
    baseFragment = await readGLSL("./TestBaseFragment.glsl");
    initialized = true;
  }
}

async function glslTest(src){
  await initGLSLTest();
  let source = await readGLSL(src);
  source = baseFragment + source;
  console.log(source);
}


// test('glsl test',async (t)=>{
  glslTest("../GLSL/FragmentTest.glsl");
//})
