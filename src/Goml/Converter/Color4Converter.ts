import ConverterBase from "./ConverterBase";
import Color4 from "../../Math/Color4";

class Color4Converter extends ConverterBase {
  public name: string = "color4";

  public toStringAttr(val: any): string {
    return val.toString();
  }

  public toObjectAttr(attr: any): Color4 {
    return attr instanceof Color4 ? attr : Color4.parse(attr);
  }

  public validate(attr: any): boolean {
    return attr instanceof Color4;
  }
}

export default Color4Converter;
