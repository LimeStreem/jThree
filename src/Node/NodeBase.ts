import AttributesContainer from "./Attribute/AttributesContainer";
import JThreeObjectEEWithID from "../Base/JThreeObjectEEWithID";

/**
 * This is the base class of node.
 * All node classes are inherited from this.
 */
class NodeBase extends JThreeObjectEEWithID {
  public element: HTMLElement;
  protected __children: NodeBase[] = [];
  protected __parent: NodeBase;
  private _attributes: AttributesContainer;
  private _mounted: boolean = false;

  constructor() {
    super();
  }

  /**
   * Connect element to node.
   * This method is expected to be called just once.
   * @param {HTMLElement} element [description]
   */
  public setElement(element: HTMLElement): void {
    if (!this._attributes) {
      this._attributes = new AttributesContainer(this, element);
      this.element = element;
    } else {
      throw new Error("This method is expected to be called just once.");
    }
  }

  /**
   * Set attribute
   * @param {string} name  attribute name string.
   * @param {any}    value attribute value.
   */
  public setAttribute(name: string, value: any): void {
    this._attributes.set(name, value);
  }

  /**
   * Get attribute.
   * @param  {string} name attribute name string.
   * @return {any}         attribute value.
   */
  public getAttribute(name: string): any {
    return this._attributes.get(name);
  }

  /**
   * Get attribute.
   * @param  {string} name attribute name string.
   * @return {string}      attribute value with string.
   */
  public getAttributeString(name: string): string {
    return this._attributes.getStr(name);
  }

  /**
   * Get mounted status.
   * @return {boolean} Whether this node is mounted or not.
   */
  public get mounted(): boolean {
    return this._mounted;
  }
}

export default NodeBase;
