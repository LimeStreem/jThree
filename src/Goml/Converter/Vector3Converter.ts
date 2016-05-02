import ConverterBase from "./ConverterBase";
import Vector3 from "../../Math/Vector3";

class Vector3Converter extends ConverterBase {
  public toStringAttr(val: any): string {
    return val.toString();
  }

  public toObjectAttr(attr: any): Vector3 {
    return attr instanceof Vector3 ? attr : Vector3.parse(attr);
  }

  public validate(attr: any): boolean {
    return attr instanceof Vector3;
  }
}

export default Vector3Converter;
