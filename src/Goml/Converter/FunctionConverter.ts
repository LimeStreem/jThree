import ConverterBase from "./ConverterBase";
import isFunction from "lodash.isfunction";

class FunctionConverter extends ConverterBase {
  public name: string = "function";

  public toStringAttr(val: any): string {
    return val.toString().match(/function\sanonymous\(\)\s\{\n([\s\S]+)\n\}/m)[1];
  }

  public toObjectAttr(attr: any): () => any {
    return isFunction(attr) ? attr : new Function(attr);
  }

  public validate(attr: any): boolean {
    return isFunction(attr);
  }
}

export default FunctionConverter;
