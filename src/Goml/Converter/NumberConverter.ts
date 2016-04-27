import ConverterBase from "./ConverterBase";
import isNumber from "lodash.isnumber";
import isString from "lodash.isstring";

class NumberConverter extends ConverterBase {
  public name: string = "float";

  public toStringAttr(val: any): string {
    if (isString(val) || isNumber(val)) {
      return val.toString();
    } else {
      throw new Error("Input value is not a number or string");
    }
  }

  public toObjectAttr(attr: any): number {
    if (isString(attr) || isNumber(attr)) {
      return Number(attr);
    } else {
      throw new Error("Input value is not a number or string");
    }
  }
}

export default NumberConverter;
