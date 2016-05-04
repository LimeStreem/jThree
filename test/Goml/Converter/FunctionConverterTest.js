import test from 'ava';

import FunctionConverter from '../../../lib/Goml/Converter/FunctionConverter';
import isString from 'lodash.isstring';

const AnyTypeOfObject = {};

test('Not compatible type of value should be rejected.', (t) => {
  const converter = new FunctionConverter();
  t.truthy(converter.validate(AnyTypeOfObject) === false);
});

/* eslint-disable no-new-func */
test('Compatible type should be ok.', (t) => {
  const converter = new FunctionConverter();
  t.truthy(converter.validate(new Function('')) === true);
});

test('If compatible type of value is parsed to specified type, nothing will be changed.', (t) => {
  const converter = new FunctionConverter();
  const value = new Function('');
  t.truthy(converter.toObjectAttr(value) === value);
});

test('If compatible type of value is parsed to string, return type is string', (t) => {
  const converter = new FunctionConverter();
  t.truthy(isString(converter.toStringAttr(new Function(''))));
});
/* eslint-enable no-new-func */
