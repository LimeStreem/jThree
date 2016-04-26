import AttributesContainer from "./Attribute/AttributesContainer";
import JThreeObjectEEWithID from "../Base/JThreeObjectEEWithID";

class NodeBase extends JThreeObjectEEWithID {
  public attributes: AttributesContainer;
  protected __children: NodeBase[] = [];
  protected __parent: NodeBase;
  private _mounted: boolean = false;
  private _element: HTMLElement;

  constructor() {
    super();
  }

  public setElement(element: HTMLElement): void {
    if (!this.attributes) {
      this.attributes = new AttributesContainer(this, element);
      this._element = element;
    } else {
      throw new Error("This method is expected to be called just once.");
    }
  }

  /**
   * get mounted status
   * @return {boolean} [description]
   */
  public get mounted(): boolean {
    return this._mounted;
  }
}

export default NodeBase;
