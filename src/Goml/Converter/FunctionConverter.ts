import ConverterBase from "./ConverterBase";

class FunctionConverter extends ConverterBase {
  public name: string = "function";

  public toStringAttr(val: any): string {
    return val.toString().match(/function\sanonymous\(\)\s\{\n([\s\S]*)\n\}/m)[1];
  }

  public toObjectAttr(attr: any): () => any {
    return this.validate(attr) ? attr : new Function(attr);
  }

  public validate(attr: any): boolean {
    return (/function\sanonymous\(\)\s\{\n([\s\S]*)\n\}/m).test(attr.toString());
  }
}

export default FunctionConverter;
