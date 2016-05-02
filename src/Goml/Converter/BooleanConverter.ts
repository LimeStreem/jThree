import ConverterBase from "./ConverterBase";

class BooleanConverter extends ConverterBase {
  public name: string = "boolean";

  public toStringAttr(val: any): string {
    return val.toString();
  }

  public toObjectAttr(attr: any): boolean {
    return attr === true || attr === false ? attr : attr === "true";
  }

  public validate(attr: any): boolean {
    return attr === true || attr === false;
  }
}

export default BooleanConverter;
