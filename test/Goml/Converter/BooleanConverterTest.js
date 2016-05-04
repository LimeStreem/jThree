import test from 'ava';

import BooleanConverter from '../../../lib/Goml/Converter/BooleanConverter';
import isString from 'lodash.isstring';

const AnyTypeOfObject = {};

test('Not compatible type of value should be rejected.', (t) => {
  const converter = new BooleanConverter();
  t.truthy(converter.validate(AnyTypeOfObject) === false);
});

test('Compatible type should be ok.', (t) => {
  const converter = new BooleanConverter();
  t.truthy(converter.validate(true) === true);
});

test('If compatible type of value is parsed to specified type, nothing will be changed.', (t) => {
  const converter = new BooleanConverter();
  const value = true;
  t.truthy(converter.toObjectAttr(value) === value);
});

test('If compatible type of value is parsed to string, return type is string', (t) => {
  const converter = new BooleanConverter();
  t.truthy(isString(converter.toStringAttr(true)));
});
