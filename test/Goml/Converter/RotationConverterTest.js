import test from 'ava';

import RotationConverter from '../../../lib/Goml/Converter/RotationConverter';
import Quaternion from '../../../lib/Math/Quaternion';
import isString from 'lodash.isstring';

const AnyTypeOfObject = {};

test('Not compatible type of value should be rejected.', (t) => {
  const converter = new RotationConverter();
  t.truthy(converter.validate(AnyTypeOfObject) === false);
});

test('Compatible type should be ok.', (t) => {
  const converter = new RotationConverter();
  t.truthy(converter.validate(Quaternion.Identity) === true);
});

test('If compatible type of value is parsed to specified type, nothing will be changed.', (t) => {
  const converter = new RotationConverter();
  const value = Quaternion.Identity;
  t.truthy(converter.toObjectAttr(value) === value);
});

test('If compatible type of value is parsed to string, return type is string', (t) => {
  const converter = new RotationConverter();
  t.truthy(isString(converter.toStringAttr(Quaternion.Identity)));
});
