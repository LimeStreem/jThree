import ConverterBase from "./ConverterBase";

class StringConverter extends ConverterBase {
  public toStringAttr(val: any): string {
    return String(val);
  }

  public toObjectAttr(attr: any): string {
    return String(attr);
  }
}

export default StringConverter;
