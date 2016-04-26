import AttributeParser from "../AttributeParser";
import ConverterBase from "./ConverterBase";
import isNumber from "lodash.isnumber";

class AngleConverter extends ConverterBase {
  public name: string = "angle";

  public toStringAttr(val: any): string {
    return val.toString();
  }

  public toObjectAttr(attr: any): number {
    return isNumber(attr) ? attr : AttributeParser.parseAngle(attr);
  }
}

export default AngleConverter;