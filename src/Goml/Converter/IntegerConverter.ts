import ConverterBase from "./ConverterBase";

class IntegerConverter extends ConverterBase {
  public name: string = "int";

  public toStringAttr(val: any): string {
    return val.toString();
  }

  public toObjectAttr(attr: any): number {
    return parseInt(attr, 10);
  }
}

export default IntegerConverter;
