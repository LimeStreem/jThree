import ConverterBase from "./ConverterBase";
import isNumber from "lodash.isnumber";
import isString from "lodash.isstring";

class NumberConverter extends ConverterBase {
  public name: string = "float";

  public toStringAttr(val: any): string {
    return val.toString();
  }

  public toObjectAttr(attr: any): number {
    return Number(attr);
  }

  public validate(attr: any): boolean {
    return isNumber(attr);
  }
}

export default NumberConverter;
