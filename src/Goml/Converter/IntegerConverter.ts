import ConverterBase from "./ConverterBase";
import isNumber from "lodash.isnumber";

class IntegerConverter extends ConverterBase {
  public name: string = "int";

  public toStringAttr(val: any): string {
    return val.toString();
  }

  public toObjectAttr(attr: any): number {
    return parseInt(attr, 10);
  }

  public validate(attr: any): boolean {
    return isNumber(attr);
  }
}

export default IntegerConverter;
