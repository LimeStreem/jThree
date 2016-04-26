import AttributeDeclaration from "./AttributeDeclaration";
import Attribute from "./Attribute";
import NodeBase from "../NodeBase";
import ConverterList from "../Config/ConverterList";

class AttributesContainer {
  private _members: { [key: string]: Attribute } = {};
  private _node: NodeBase;

  constructor(node: NodeBase) {
    this._node = node;
  }

  /**
   * Set attribute with key and value. If not defined, create a new one.
   * @param {string} key   [description]
   * @param {any}    value [description]
   */
  public set(key: string, value: any): void {
    const attr = this._members[key];
    if (attr) {
      attr.setValue(value);
    } else {
      const newAttr = new Attribute(key, value, null, false);
      this._members[key] = newAttr;
    }
  }

  public define(key: string, decl: AttributeDeclaration): void {
    const attr = this._members[key];
    if (attr) {
    }
  }
}

export default AttributesContainer;
