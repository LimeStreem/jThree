import ConverterBase from "./ConverterBase";
import isString from "lodash.isstring";

class StringConverter extends ConverterBase {
  public toStringAttr(val: any): string {
    return String(val);
  }

  public toObjectAttr(attr: any): string {
    return String(attr);
  }

  public validate(attr: any): boolean {
    return true;
  }
}

export default StringConverter;
