import test from 'ava';

import StringConverter from '../../../lib/Goml/Converter/StringConverter';
import isString from 'lodash.isstring';

const AnyTypeOfObject = {};

test('Not compatible type of value should be rejected. (StringConverter has no incompatible type)', (t) => {
  const converter = new StringConverter();
  t.truthy(converter.validate(AnyTypeOfObject) === true);
});

test('Compatible type should be ok.', (t) => {
  const converter = new StringConverter();
  t.truthy(converter.validate('any_string') === true);
});

test('If compatible type of value is parsed to specified type, nothing will be changed.', (t) => {
  const converter = new StringConverter();
  const value = 'any_string';
  t.truthy(converter.toObjectAttr(value) === value);
});

test('If compatible type of value is parsed to string, return type is string', (t) => {
  const converter = new StringConverter();
  t.truthy(isString(converter.toStringAttr('any_string')));
});
