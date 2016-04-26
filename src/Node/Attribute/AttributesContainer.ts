import AttributeDeclaration from "./AttributeDeclaration";
import Attribute from "./Attribute";
import NodeBase from "../NodeBase";
import ConverterList from "../Config/ConverterList";

/**
 * Handling attributes definition and syncing value with HTMLElement or CoreObject.
 */
class AttributesContainer {
  private _members: { [key: string]: Attribute } = {};
  private _node: NodeBase;
  private _element: HTMLElement;

  /**
   * Construct attributes with defined attributes in HTMLElement in node.
   * This class is expected to instanciate after element is connected to node.
   * @param {NodeBase} node Related node.
   */
  constructor(node: NodeBase, element: HTMLElement) {
    this._node = node;
    this._element = element;
    if (!element) {
      throw new Error("Element must be defined.");
    }
  }

  /**
   * Set attribute with key and value. If not defined, create a new one.
   * "change" event will be emitted if target attribute is exist.
   * @param {string} key   Key string.
   * @param {any}    value Value with any type.
   */
  public set(key: string, value: any): void {
    const attr = this._members[key];
    if (attr) {
      attr.setValue(value); // emit change
    } else {
      const newAttr = new Attribute(key, value, null, false);
      this._members[key] = newAttr;
    }
  }

  /**
   * Get attribute with specified type.
   * @param  {string} key Key string.
   * @return {any}        Value with specified type.
   */
  public get(key: string): any {
    const attr = this._members[key];
    if (attr) {
      return attr.value(); // emit get
    }
  }

  public getStr(key: string): string {
    const attr = this._members[key];
    if (attr) {
      return attr.valueStr(); // emit get
    }
  }

  /**
   * Define attribute.
   * If target attribute name has already exist, override constant, onchange, onget, converter. The value will be retained by being converted its type with new converter.
   * "change" event will be emitted with converted value if target attribute is exist.
   * @param {string}               key  Key string.
   * @param {AttributeDeclaration} decl Plain object formed with specific attribute declaration.
   */
  public define(key: string, decl: AttributeDeclaration): void {
    let attr = this._members[key];
    const isExist = !!attr;
    if (isExist) {
      attr.constant = decl.constant;
    } else {
      attr = new Attribute(key, decl.default, new ConverterList[decl.converter](), decl.constant);
    }
    if (decl.onchange) {
      attr.removeAllListeners();
      attr.on("change", decl.onchange);
    }
    if (decl.onget) {
      attr.removeAllListeners();
      attr.on("get", decl.onget);
    }
    if (isExist) {
      attr.setConverter(new ConverterList[decl.converter]()); // emit change
    }
  }
}

export default AttributesContainer;
