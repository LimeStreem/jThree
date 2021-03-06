import IApplyMaterialArgument from "../IApplyMaterialArgument";
import BasicMaterial from "../BasicMaterial";
/**
 * Provides shadow map rendering materials.
 * By this material, default meshes will be rendered as shadow map.
 * These shadow map will be used in lighting stage to drop shadow.
 */
class ShadowMapMaterial extends BasicMaterial {
  constructor() {
    super(require("../BuiltIn/ShadowMap/ShadowMap.xmml"), "builtin.shadowmap");
    this.__setLoaded();
  }

  public apply(matArg: IApplyMaterialArgument): void {
    // const light = matArg.scene.LightRegister.shadowDroppableLights[matArg.techniqueIndex];
    // this.shaderVariables = {
    //   matL: Matrix.multiply(light.matLightViewProjection, matArg.object.Transformer.localToGlobal)
    // };
    super.apply(matArg);
  }
}

export default ShadowMapMaterial;
