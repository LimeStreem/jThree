import AttributesContainer from "./Attribute/AttributesContainer";
import JThreeObjectEEWithID from "../Base/JThreeObjectEEWithID";
import NodeUtility from "./NodeUtility";
import isNumber from "lodash.isnumber";

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
   * Add child.
   * @param {NodeBase} Target node to be inserted.
   * @param {number}   index Index of insert location in children. If this argument is null or undefined, target will be inserted in last. If this argument is negative number, target will be inserted in index from last.
   */
  public addChild(child: NodeBase, index?: number): void {
    child.__parent = this;
    if (!isNumber(index) && index != null) {
      throw new Error("insert index should be number or null or undefined.");
    }
    const insertIndex = index == null ? this.__children.length : index;
    this.__children.splice(insertIndex, 0, child);
    if (this.mounted()) {
      child.setMounted(true);
    }
    // handling html
    let referenceElement: HTMLElement = null;
    if (index != null) {
      referenceElement = this.element[NodeUtility.getNodeListIndexByElementIndex(this.element, index)];
    }
    this.element.insertBefore(child.element, referenceElement);
  }

  /**
   * Remove child.
   * @param {NodeBase} child Target node to be inserted.
   */
  public removeChild(child: NodeBase): void {
    for (let i = 0; i < this.__children.length; i++) {
      let v = this.__children[i];
      if (v === child) {
        child.__parent = null;
        this.__children.splice(i, 1);
        if (this.mounted()) {
          child.setMounted(false);
        }
        // html handling
        child.element.remove();
        break;
      }
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
  public mounted(): boolean {
    return this._mounted;
  }

  public setMounted(mounted: boolean): void {
    if ((mounted && !this._mounted) || (!mounted && this._mounted)) {
      this._mounted = mounted;
      if (mounted) {
        this.emit("on-mount");
      } else {
        this.emit("on-unmount");
      }
      this.__children.forEach((child) => {
        child.setMounted(mounted);
      });
    }
  }
}

export default NodeBase;
