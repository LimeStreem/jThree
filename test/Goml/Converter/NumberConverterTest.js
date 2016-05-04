import test from 'ava';

import NumberConverter from '../../../lib/Goml/Converter/NumberConverter';
import isString from 'lodash.isstring';

const AnyTypeOfObject = {};

test('Not compatible type of value should be rejected.', (t) => {
  const converter = new NumberConverter();
  t.truthy(converter.validate(AnyTypeOfObject) === false);
});

test('Compatible type should be ok.', (t) => {
  const converter = new NumberConverter();
  t.truthy(converter.validate(10.1) === true);
});

test('If compatible type of value is parsed to specified type, nothing will be changed.', (t) => {
  const converter = new NumberConverter();
  const value = 10.1;
  t.truthy(converter.toObjectAttr(10.1) === value);
});

test('If compatible type of value is parsed to string, return type is string', (t) => {
  const converter = new NumberConverter();
  t.truthy(isString(converter.toStringAttr(10.1)));
});
