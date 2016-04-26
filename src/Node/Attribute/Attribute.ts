import JThreeObjectEEWithID from "../../Base/JThreeObjectEEWithID";
import ConverterBase from "../Converter/ConverterBase";
import StringConverter from "../Converter/StringConverter";

/**
 * Management a single attribute with specified type. Converter will serve a value with object with any type instead of string.
 * When attribute is changed, emit a "change" event. When attribute is requested, emit a "get" event.
 * If initialized flag is not true, event will not be emitted.
 */
class Attribute extends JThreeObjectEEWithID {
  /**
   * If this flag is not true, event will not be emitted.
   * Recommend you to make this property true by calling initialized method.
   * @type {boolean}
   */
  public initialized: boolean = false;
  private _key: string;
  private _value: any;
  private _converter: ConverterBase;
  private _constant: boolean;

  /**
   * Construct a new attribute with name of key and any value with specified type. If constant flag is true, This attribute will be immutable.
   * If converter is not served, string converter will be set as default.
   * @param {string}        key       Key of this attribute.
   * @param {any}           value     Value of this attribute.
   * @param {ConverterBase} converter Converter of this attribute.
   * @param {boolean}       constant  Whether this attribute is immutable or not.
   */
  constructor(key: string, value: any, converter: ConverterBase, constant: boolean) {
    super();
    this._key = key;
    this._value = value;
    this._converter = converter ? converter : new StringConverter();
  }

  /**
   * Emit a "change" event and obviously make initialized flag true.
   */
  public initialize(): void {
    this.initialized = true;
    this.emit("change");
  }

  /**
   * Set converter.
   * Convert value to string with previus converter and re-convert with new converter. Then converter will be replaced.
   * @param {ConverterBase} converter New converter.
   */
  public setConverter(converter: ConverterBase): void {
    const valueStr = this._converter.toStringAttr(this._value);
    this._converter = converter;
    this.setValue(valueStr);
  }

  /**
   * Get a key string of this attribute.
   * @return {string} key string.
   */
  public key(): string {
    return this._key;
  }

  /**
   * Get a value with specified type.
   * @return {any} value with specified type.
   */
  public value(): any {
    return this._value;
  }

  /**
   * Get a value with string.
   * @return {string} value with string.
   */
  public valueStr(): string {
    return this._value == null ? "" : this._converter.toStringAttr(this._value);
  }

  /**
   * Set a value with any type.
   * @param {any} val Value with string or specified type.
   */
  public setValue(val: any): void {
    if (this._constant && this._value !== undefined) {
      console.warn(`Attribute "${this.id}" is immutable.`);
      return;
    }
    if (typeof val === "string") {
      this._value = this._converter.toObjectAttr(val);
    } else {
      try {
        this._converter.toStringAttr(val);
      } catch (e) {
        console.warn(`Type of attribute: ${this._key}(${val}) is not adapt to converter: ${this._converter.getTypeName()}`, val);
        return;
      }
      this._value = val;
    }
    if (this.initialized) {
      this.emit("change", this);
    }
  }
}

export default Attribute;
