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
    this.attributes = new AttributesContainer(this);
  }

  public setElement(element: HTMLElement): void {
    this._element = element;
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
