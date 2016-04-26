import ConverterBase from "./ConverterBase";

class BooleanConverter extends ConverterBase {
  public name: string = "boolean";

  public toStringAttr(val: any): string {
    return val.toString();
  }

  public toObjectAttr(attr: any): boolean {
    return attr === true || attr === false ? attr : attr === "true";
  }
}

export default BooleanConverter;
