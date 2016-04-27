import test from 'ava';
import sinon from 'sinon';

import Attribute from '../../../lib/Goml/Attribute/Attribute';
import NumberConverter from '../../../lib/Goml/Converter/NumberConverter';

test('Construct attribute with correct key.', (t) => {
  const key = 'nameofkey';
  const value = 100;
  const attr = new Attribute(key, value, new NumberConverter(), false);
  t.ok(attr.key() === key);
});

test('Construct attribute with correct value with number type.', (t) => {
  const key = 'nameofkey';
  const value = 100;
  const attr = new Attribute(key, value, new NumberConverter(), false);
  t.ok(attr.value() === value);
});

test('Construct attribute with correct value with string type.', (t) => {
  const key = 'nameofkey';
  const value = 100;
  const valueString = '100';
  const attr = new Attribute(key, value, new NumberConverter(), false);
  t.ok(attr.valueStr() === valueString);
});

test('If construct attribute with no converter specified, string converter will be set as default.', (t) => {
  const key = 'nameofkey';
  const value = 100;
  const valueString = '100';
  const attr = new Attribute(key, value, null, false);
  t.ok(attr.value() === valueString);
  t.ok(attr.valueStr() === valueString);
});

test('If converter is changed from string to number, value will be converted with number.', (t) => {
  const key = 'nameofkey';
  const value = 100;
  const valueString = '100';
  const attr = new Attribute(key, value, null, false);
  t.ok(attr.value() === valueString);
  t.ok(attr.valueStr() === valueString);
  attr.setConverter(new NumberConverter());
  t.ok(attr.value() === value);
  t.ok(attr.valueStr() === valueString);
});

test('If new value is set, the value was correctly changed.', (t) => {
  const key = 'nameofkey';
  const value = 100;
  const valueString = '100';
  const attr = new Attribute(key, value, new NumberConverter(), false);
  t.ok(attr.value() === value);
  t.ok(attr.valueStr() === valueString);
  const newValue = 200;
  const newValueString = '200';
  attr.setValue(newValue);
  t.ok(attr.value() === newValue);
  t.ok(attr.valueStr() === newValueString);
});

test('If new value is set with string type, the value was correctly changed with number type.', (t) => {
  const key = 'nameofkey';
  const value = 100;
  const valueString = '100';
  const attr = new Attribute(key, value, new NumberConverter(), false);
  t.ok(attr.value() === value);
  t.ok(attr.valueStr() === valueString);
  const newValue = 200;
  const newValueString = '200';
  attr.setValue(newValueString);
  t.ok(attr.value() === newValue);
  t.ok(attr.valueStr() === newValueString);
});

test('If new value is set with Object type (different from Converter type), the value will not be changed.', (t) => {
  const key = 'nameofkey';
  const value = 100;
  const valueString = '100';
  const attr = new Attribute(key, value, new NumberConverter(), false);
  t.ok(attr.value() === value);
  t.ok(attr.valueStr() === valueString);
  const newValue = {};
  attr.setValue(newValue);
  t.ok(attr.value() === value);
  t.ok(attr.valueStr() === valueString);
});

test('If responsive flag is false, the chenge event will not be emitted when value is changed.', (t) => {
  const key = 'nameofkey';
  const value = 100;
  const attr = new Attribute(key, value, new NumberConverter(), false);
  const callbackfn = sinon.spy();
  attr.on('change', callbackfn);
  const newValue = 200;
  attr.setValue(newValue);
  t.ok(callbackfn.callCount === 0);
});

test('If responsive flag is false, the get event will not be emitted when value is got.', (t) => {
  const key = 'nameofkey';
  const value = 100;
  const attr = new Attribute(key, value, new NumberConverter(), false);
  const callbackfn = sinon.spy();
  attr.on('get', callbackfn);
  attr.value();
  t.ok(callbackfn.callCount === 0);
});

test('If responsive flag is true, the chenge event will be emitted when value is changed.', (t) => {
  const key = 'nameofkey';
  const value = 100;
  const attr = new Attribute(key, value, new NumberConverter(), false);
  attr.setResponsive(true);
  const callbackfn = sinon.spy();
  attr.on('change', callbackfn);
  const newValue = 200;
  attr.setValue(newValue);
  t.ok(callbackfn.callCount === 1);
});

test('If responsive flag is true, the get event will be emitted when value is got.', (t) => {
  const key = 'nameofkey';
  const value = 100;
  const attr = new Attribute(key, value, new NumberConverter(), false);
  attr.setResponsive(true);
  const callbackfn = sinon.spy();
  attr.on('get', callbackfn);
  attr.value();
  t.ok(callbackfn.callCount === 1);
});

test('When responsive flag is set to true, the chenge event will be emitted.', (t) => {
  const key = 'nameofkey';
  const value = 100;
  const attr = new Attribute(key, value, new NumberConverter(), false);
  const callbackfn = sinon.spy();
  attr.on('change', callbackfn);
  attr.setResponsive(true);
  t.ok(callbackfn.callCount === 1);
});
