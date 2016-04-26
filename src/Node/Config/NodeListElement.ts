import NodeBase from "../NodeBase";
import JThreeObject from "../../Base/JThreeObject";

/**
 * GomlNodeをグループとしてまとめて管理します
 */
class GomlNodeListElement extends JThreeObject {
  private _group: string;

  private _nodeTypes: { [key: string]: new () => NodeBase };

  /**
   * constructor
   *
   * @param {string} group    グループ識別用の文字列。すべて大文字で管理されています。
   * @param {any}}  nodeTypes グループ内のGomlNodeのconstructorをまとめるObject。Tag名がKeyとなっています。
   */
  constructor(group: string, nodeTypes: { [key: string]: new () => NodeBase }) {
    super();
    this._group = group;
    this._nodeTypes = nodeTypes;
  }

  public get Group(): string {
    return this._group;
  }

  public get NodeTypes(): { [key: string]: new () => NodeBase } {
    return this._nodeTypes;
  }
}

export default GomlNodeListElement;
