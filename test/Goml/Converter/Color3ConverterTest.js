import test from 'ava';

import Color3Converter from '../../../lib/Goml/Converter/Color3Converter';
import Color3 from '../../../lib/Math/Color3';
import isString from 'lodash.isstring';

const AnyTypeOfObject = {};

test('Not compatible type of value should be rejected.', (t) => {
  const converter = new Color3Converter();
  t.truthy(converter.validate(AnyTypeOfObject) === false);
});

test('Compatible type should be ok.', (t) => {
  const converter = new Color3Converter();
  t.truthy(converter.validate(new Color3(0, 0, 0)) === true);
});

test('If compatible type of value is parsed to specified type, nothing will be changed.', (t) => {
  const converter = new Color3Converter();
  const value = new Color3(0, 0, 0);
  t.truthy(converter.toObjectAttr(value) === value);
});

test('If compatible type of value is parsed to string, return type is string', (t) => {
  const converter = new Color3Converter();
  t.truthy(isString(converter.toStringAttr(new Color3(0, 0, 0))));
});
