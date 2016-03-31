import MaterialNodeBase from "./MaterialNodeBase";
import Material from "../../../Core/Materials/Material";
import GomlAttribute from "../../GomlAttribute";
import GomlTreeNodeBase from "../../GomlTreeNodeBase";

class MaterialNode extends MaterialNodeBase<Material> {
  constructor() {
    super();
    this.attributes.defineAttribute({
      "type": {
        value: "builtin.phong",
        converter: "string",
        onchanged: this._onTypeAttrChanged,
      }
    });
  }

  protected __onMount(): void {
    super.__onMount();
  }

  private _onTypeAttrChanged(attr: GomlAttribute): void {
    let material = this.__getMaterialFromMatName(attr.Value);
    if (material) {
      this.__setMaterial(material);
    } else {
      this.nodeImport("jthree.import", `material-${attr.Value}`, (node: GomlTreeNodeBase) => {
        if (node) {
          material = this.__getMaterialFromMatName(attr.Value);
          this.__setMaterial(material);
        }
      });
    }
  }
}

export default MaterialNode;
