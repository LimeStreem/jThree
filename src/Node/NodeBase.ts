import AttributesContainer from "./Attribute/AttributesContainer";
import JThreeObjectEEWithID from "../Base/JThreeObjectEEWithID";

/**
 * This is the base class of node.
 * All node classes are inherited from this.
 */
class NodeBase extends JThreeObjectEEWithID {
  public attributes: AttributesContainer;
  public element: HTMLElement;
  protected __children: NodeBase[] = [];
  protected __parent: NodeBase;
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
    if (!this.attributes) {
      this.attributes = new AttributesContainer(this, element);
      this.element = element;
    } else {
      throw new Error("This method is expected to be called just once.");
    }
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
