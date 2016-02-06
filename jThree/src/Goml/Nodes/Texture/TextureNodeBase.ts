import CoreRelatedNodeBase from "../../CoreRelatedNodeBase";
import GLEnumParser from "../../../Core/Canvas/GLEnumParser";
import TextureBase from "../../../Core/Resources/Texture/TextureBase";
import ResourceManager from "../../../Core/ResourceManager";
import JThreeContext from "../../../JThreeContext";
import ContextComponents from "../../../ContextComponents";
/**
 * All texture resource node class inherit this class.
 */
abstract class TextureNodeBase<T extends TextureBase> extends CoreRelatedNodeBase<T> {

  constructor() {
    super();
    this.attributes.defineAttribute({
      name: {
        value: undefined,
        converter: "string",
        constant: true,
      },
      minFilter: {
        value: "LINEAR",
        converter: "string",
        onchanged: (attr) => {
          if (this.target) {
            this.target.MinFilter = GLEnumParser.parseTextureMinFilter(attr.Value);
          }
        }
      },
      magFilter: {
        value: "LINEAR",
        converter: "string",
        onchanged: (attr) => {
          if (this.target) {
            this.target.MagFilter = GLEnumParser.parseTextureMagFilter(attr.Value);
          }
        }
      },
      twrap: {
        value: "CLAMP_TO_EDGE",
        converter: "string",
        onchanged: (attr) => {
          if (this.target) {
            this.target.TWrap = GLEnumParser.parseTextureWrapMode(attr.Value);
          }
        }
      },
      swrap: {
        value: "CLAMP_TO_EDGE",
        converter: "string",
        onchanged: (attr) => {
          if (this.target) {
            this.target.SWrap = GLEnumParser.parseTextureWrapMode(attr.Value);
          }
        }
      }
    });
  }

  protected onMount(): void {
    super.onMount();
    const rm = JThreeContext.getContextComponent<ResourceManager>(ContextComponents.ResourceManager);
    const name = this.attributes.getValue("name");
    this.constructTexture(name, rm).then((texture) => {
      this.target = texture;
      this.nodeExport(name);
    });
  }

  /**
   * Construct texture.
   * @param  {string}          name [description]
   * @param  {ResourceManager} rm   [description]
   * @return {TextureBase}          [description]
   */
  protected abstract constructTexture(name: string, rm: ResourceManager): Q.IPromise<T>;
}

export default TextureNodeBase;
