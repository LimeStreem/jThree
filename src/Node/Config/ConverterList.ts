/**
 * List for constructor functions of converter classes.
 * Converters manage how an attribute will be parsed, converted into string, or animated.
 */

import ConverterBase from "../Converter/ConverterBase";
import AngleConverter from "../Converter/AngleConverter";
import NumberConverter from "../Converter/NumberConverter";
import IntegerConverter from "../Converter/IntegerConverter";
import Vector3Converter from "../Converter/Vector3Converter";
import RotationConverter from "../Converter/RotationConverter";
import Color4Converter from "../Converter/Color4Converter";
import Color3Converter from "../Converter/Color3Converter";
import BooleanConverter from "../Converter/BooleanConverter";
import StringConverter from "../Converter/StringConverter";
import FunctionConverter from "../Converter/FunctionConverter";

const converterList: {[key: string]: new () => ConverterBase} = {
  "angle": AngleConverter,
  "float": NumberConverter,
  "int": IntegerConverter,
  "vec3": Vector3Converter,
  "rotation": RotationConverter,
  "color4": Color4Converter,
  "color3": Color3Converter,
  "boolean": BooleanConverter,
  "string": StringConverter,
  "function": FunctionConverter,
};

export default converterList;
