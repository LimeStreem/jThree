import ExtensionResolverBase from "./ExtensionResolverBase";
class FloatTextureExtensionResolver extends ExtensionResolverBase {

  public request(gl: WebGLRenderingContext): { [key: string]: any; } {
    return this.__requestExtensionWithWarning(gl, "OES_texture_float");
  }
}

export default FloatTextureExtensionResolver;
