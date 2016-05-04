import test from 'ava';

import AngleConverter from '../../../lib/Goml/Converter/AngleConverter';
import isString from 'lodash.isstring';

const AnyTypeOfObject = {};

test('Not compatible type of value should be rejected.', (t) => {
  const converter = new AngleConverter();
  t.truthy(converter.validate(AnyTypeOfObject) === false);
});

test('Compatible type should be ok.', (t) => {
  const converter = new AngleConverter();
  t.truthy(converter.validate(10) === true);
});

test('If compatible type of value is parsed to specified type, nothing will be changed.', (t) => {
  const converter = new AngleConverter();
  const value = 10;
  t.truthy(converter.toObjectAttr(value) === value);
});

test('If compatible type of value is parsed to string, return type is string', (t) => {
  const converter = new AngleConverter();
  t.truthy(isString(converter.toStringAttr(10)));
});
