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

  public set(key: string, value: any): void {
    const attr = this._members[key];
    if (attr) {
      attr.setValue(value);
    } else {
      const newAttr = new Attribute(key, value, "string", false);
      this._members[key] = newAttr;
    }
  }

  public define(key: string, decl: AttributeDeclaration): void {
    const attr = this._members[key];
    if (attr) {
    }
  }

  private _add<T>(key: string, value: T, converter: string, constant: boolean, onchange: (T) => void, onget: () => T): void {
    const converter = new ConverterList[decl.converter.toLowerCase()];
    const newAttr = new Attribute(key, decl.default, converter, decl.constant);
    if (decl.onchange) {
      newAttr.on("change", decl.onchange);
    }
    if (decl.onget) {
      newAttr.on("get", decl.onget);
    }
    this._members[key] = newAttr;
  }
}

export default AttributesContainer;
