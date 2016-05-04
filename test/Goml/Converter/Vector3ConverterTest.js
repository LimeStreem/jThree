import test from 'ava';

import Vector3Converter from '../../../lib/Goml/Converter/Vector3Converter';
import Vector3 from '../../../lib/Math/Vector3';
import isString from 'lodash.isstring';

const AnyTypeOfObject = {};

test('Not compatible type of value should be rejected.', (t) => {
  const converter = new Vector3Converter();
  t.truthy(converter.validate(AnyTypeOfObject) === false);
});

test('Compatible type should be ok.', (t) => {
  const converter = new Vector3Converter();
  t.truthy(converter.validate(new Vector3(0, 0, 0)) === true);
});

test('If compatible type of value is parsed to specified type, nothing will be changed.', (t) => {
  const converter = new Vector3Converter();
  const value = new Vector3(0, 0, 0);
  t.truthy(converter.toObjectAttr(value) === value);
});

test('If compatible type of value is parsed to string, return type is string', (t) => {
  const converter = new Vector3Converter();
  t.truthy(isString(converter.toStringAttr(new Vector3(0, 0, 0))));
});
