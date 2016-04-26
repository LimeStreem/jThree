import ConverterBase from "./ConverterBase";

class NumberConverter extends ConverterBase {
  public name: string = "float";

  public toStringAttr(val: any): string {
    return val.toString();
  }

  public toObjectAttr(attr: any): number {
    return Number(attr);
  }
}

export default NumberConverter;
