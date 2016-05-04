import AttributesContainer from "../Attribute/AttributesContainer";
import JThreeObjectEEWithID from "../../Base/JThreeObjectEEWithID";
import NodeUtility from "../NodeUtility";
import isNumber from "lodash.isnumber";

/**
 * This is the base class of node.
 * All node classes are inherited from this.
 *
 * Attributes changes will be notified only when the node is mounted.
 * When the node is mounted, the children of the node will be mounted recursively.
 */
class NodeBase extends JThreeObjectEEWithID {
  public element: HTMLElement;
  public children: NodeBase[] = [];
  public parent: NodeBase;
  private _attributes: AttributesContainer;
  private _mounted: boolean = false;

  constructor() {
    super();
    this.on("on-mount", () => {
      const cb = this.__onMount;
      if (cb) { cb.bind(this)(); }
    });
    this.on("on-unmount", () => {
      const cb = this.__onUnmount;
      if (cb) { cb.bind(this)(); }
    });
  }

  /**
   * Connect element to node.
   * This method is expected to be called just once.
   * @param {HTMLElement} element [description]
   */
  public setElement(element: HTMLElement): void {
    if (!this._attributes) {
      this._attributes = new AttributesContainer(element);
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
    child.parent = this;
    if (!isNumber(index) && index != null) {
      throw new Error("insert index should be number or null or undefined.");
    }
    const insertIndex = index == null ? this.children.length : index;
    this.children.splice(insertIndex, 0, child);
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
    for (let i = 0; i < this.children.length; i++) {
      let v = this.children[i];
      if (v === child) {
        child.parent = null;
        this.children.splice(i, 1);
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
   * Remove myself.
   */
  public remove(): void {
    if (this.parent) {
      this.parent.removeChild(this);
    } else {
      throw new Error("root Node cannot be removed.");
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

  /**
   * Update mounted status and emit events
   * @param {boolean} mounted Mounted status.
   */
  public setMounted(mounted: boolean): void {
    if ((mounted && !this._mounted) || (!mounted && this._mounted)) {
      this._mounted = mounted;
      if (mounted) {
        this.emit("on-mount");
      } else {
        this.emit("on-unmount");
      }
      this._attributes.setResponsive(true);
      this.children.forEach((child) => {
        child.setMounted(mounted);
      });
    }
  }

  /**
   * Get index of this node from parent.
   * @return {number} number of index.
   */
  public index(): number {
    return this.parent.children.indexOf(this);
  }

  /**
   * This method is called when this node is mounted to available tree.
   * If you change attribute here, no events are fired.
   * This method should be overridden.
   */
  protected __onMount(): void {
    return;
  };

  /**
   * This method is called when this node is unmounted from available tree.
   * You can still access parent.
   * This method should be overridden.
   */
  protected __onUnmount(): void {
    return;
  };
}

export default NodeBase;
