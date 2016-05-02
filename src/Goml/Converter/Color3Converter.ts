import ConverterBase from "./ConverterBase";
import Color3 from "../../Math/Color3";

class Color3Converter extends ConverterBase {
  public name: string = "color3";

  public toStringAttr(val: any): string {
    return val.toString();
  }

  public toObjectAttr(attr: any): Color3 {
    return attr instanceof Color3 ? attr : Color3.parse(attr);
  }

  public validate(attr: any): boolean {
    return attr instanceof Color3;
  }
}

export default Color3Converter;
