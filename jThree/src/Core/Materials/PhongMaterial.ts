import Material = require("./Material");
import Program = require("../Resources/Program/Program");
import JThreeContextProxy = require("../JThreeContextProxy");
import JThreeContext = require("../JThreeContext");
import Shader = require("../Resources/Shader/Shader");
import ShaderType = require("../../Wrapper/ShaderType");
import RendererBase = require("../Renderers/RendererBase");
import Geometry = require("../Geometries/Geometry");
import SceneObject = require("../SceneObject");
import Vector3 = require("../../Math/Vector3");
import Vector4 = require('../../Math/Vector4');
import Matrix = require("../../Math/Matrix");
import PrimitiveTopology = require("../../Wrapper/PrimitiveTopology");
import Quaternion = require("../../Math/Quaternion");
import Color4 = require("../../Base/Color/Color4");
import Color3 = require('../../Base/Color/Color3');
import GLCullMode = require("../../Wrapper/GLCullMode");
import GLFeatureType = require("../../Wrapper/GLFeatureType");
import TextureRegister = require('../../Wrapper/Texture/TextureRegister');
import TextureBase = require('../Resources/Texture/TextureBase');
import Scene = require('../Scene');
import TargetTextureType = require('../../Wrapper/TargetTextureType');
import agent = require('superagent');
declare function require(string): string;

class PhongMaterial extends Material {
  private diffuse = Color4.parseColor('#F0F');

  get Diffuse(): Color4 {
    return this.diffuse;
  }

  set Diffuse(col: Color4) {
    this.diffuse = col;
  }

  private ambient = Color4.parseColor('#F0F');

  get Ambient(): Color4 {
    return this.ambient;
  }

  set Ambient(col: Color4) {
    this.ambient = col;
  }

  private specular = Color3.parseColor('#F0F');
  get Specular(): Color3 {
    return this.specular;
  }

  set Specular(col: Color3) {
    this.specular = col;
  }

  private specularCoefficient = 10;

  get SpecularCoefficient(): number {
    return this.specularCoefficient;
  }

  set SpecularCoefficient(val: number) {
    this.specularCoefficient = val;
  }

  private texture: TextureBase;

  get Texture(): TextureBase {
    return this.texture;
  }

  set Texture(tex: TextureBase) {
    this.texture = tex;
  }

  protected program: Program;
  constructor() {
    super();
    var jThreeContext: JThreeContext = JThreeContextProxy.getJThreeContext();
    var vs = require('../Shaders/VertexShaders/BasicGeometries.glsl');
    var fs = require('../Shaders/Phong.glsl');
    agent.get("http://localhost:8080/Phong.glsl").end((err, res: agent.Response) => {
      this.program = this.loadProgram("jthree.shaders.vertex.basic", "jthree.shaders.fragment.phong", "jthree.programs.phong", vs, res.text);
    });
  }

  configureMaterial(scene: Scene, renderer: RendererBase, object: SceneObject): void {
    if (!this.program) return;
    super.configureMaterial(scene, renderer, object);
    var id = renderer.ID;
    var geometry = object.Geometry;
    var programWrapper = this.program.getForContext(renderer.ContextManager);
    programWrapper.useProgram();
    var v = object.Transformer.calculateMVPMatrix(renderer);
    var jThreeContext: JThreeContext = JThreeContextProxy.getJThreeContext();
    var resourceManager = jThreeContext.ResourceManager;
    var tex = this.Texture;
    renderer.ContextManager.Context.ActiveTexture(TextureRegister.Texture0);
    if (tex) tex.getForContext(renderer.ContextManager).bind();
    else renderer.GLContext.BindTexture(TargetTextureType.Texture2D, null);
    programWrapper.registerTexture(renderer, resourceManager.getTexture(id + ".deffered.light"), 1, "u_light");
    programWrapper.setAttributeVerticies("position", geometry.PositionBuffer.getForRenderer(renderer.ContextManager));
    programWrapper.setAttributeVerticies("normal", geometry.NormalBuffer.getForRenderer(renderer.ContextManager));
    programWrapper.setAttributeVerticies("uv", geometry.UVBuffer.getForRenderer(renderer.ContextManager));
    programWrapper.setUniformMatrix("matMVP", v);
    programWrapper.setUniformMatrix("matV", renderer.Camera.ViewMatrix);
    programWrapper.setUniformMatrix("matMV", Matrix.multiply(renderer.Camera.ViewMatrix, object.Transformer.LocalToGlobal));
    programWrapper.setUniformVector("u_ambient", this.Ambient.toVector());
    programWrapper.setUniformVector("u_diffuse", this.Diffuse.toVector());
    programWrapper.setUniform1i("u_sampler", 0);
    var s = this.Specular.toVector();
    programWrapper.setUniformVector("u_specular", new Vector4(s.X, s.Y, s.Z, this.specularCoefficient));
    programWrapper.setUniformVector("u_DirectionalLight", new Vector3(0, 0, -1));
    geometry.IndexBuffer.getForRenderer(renderer.ContextManager).bindBuffer();
  }
}

export =PhongMaterial;
