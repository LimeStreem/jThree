import GomlTreeNodeBase from "../Goml/GomlTreeNodeBase";

class J3ObjectBase {
  public length: number = 0;

  protected __setArray(arr: GomlTreeNodeBase[]): void {
    Array.prototype.splice.call(this, 0, this.length);
    Array.prototype.push.apply(this, arr);
  }

  protected __getArray(): GomlTreeNodeBase[] {
    return Array.prototype.map.call(this, (v) => v);
  }
}

export default J3ObjectBase;
