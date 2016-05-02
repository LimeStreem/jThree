import test from 'ava';
import sinon from 'sinon';
import XMLDOM from 'xmldom';
const DOMParser = XMLDOM.DOMParser;

import Attribute from '../../../lib/Goml/Attribute/Attribute';
import AttributesContainer from '../../../lib/Goml/Attribute/AttributesContainer';
import NumberConverter from '../../../lib/Goml/Converter/NumberConverter';

test('Construct attribute container with correct attribute to element', (t) => {
  const element = new DOMParser().parseFromString('<tag id="test"></tag>', 'text/xml').documentElement;
  const attributesContainer = new AttributesContainer(element);
  t.truthy(attributesContainer.get('id') === 'test');
});

test('Construct attribute container with correct attribute count', (t) => {
  const element = new DOMParser().parseFromString('<tag id="test"></tag>', 'text/xml').documentElement;
  const attributesContainer = new AttributesContainer(element);
  t.truthy(Object.keys(attributesContainer._members).length === 1);
});

test('Construct attribute container with correct attribute to element (many)', (t) => {
  const element = new DOMParser().parseFromString('<tag id="id_test" class="class_test" any_attribute="any_attribute_test"></tag>', 'text/xml').documentElement;
  const attributesContainer = new AttributesContainer(element);
  t.truthy(attributesContainer.get('id') === 'id_test');
  t.truthy(attributesContainer.get('class') === 'class_test');
  t.truthy(attributesContainer.get('any_attribute') === 'any_attribute_test');
});

test('Construct attribute container with correct attribute count (many)', (t) => {
  const element = new DOMParser().parseFromString('<tag id="id_test" class="class_test" any_attribute="any_attribute_test"></tag>', 'text/xml').documentElement;
  const attributesContainer = new AttributesContainer(element);
  t.truthy(Object.keys(attributesContainer._members).length === 3);
});

test('If value of attribute "id" is set, value will be correctly changed.', (t) => {
  const element = new DOMParser().parseFromString('<tag id="id_test" class="class_test" any_attribute="any_attribute_test"></tag>', 'text/xml').documentElement;
  const attributesContainer = new AttributesContainer(element);
  t.truthy(attributesContainer.get('id') === 'id_test');
  attributesContainer.set('id', 'id_test_changed');
  t.truthy(attributesContainer.get('id') === 'id_test_changed');
});

test('If value of attribute "id" is set, value will be correctly reflect to original element.', (t) => {
  const element = new DOMParser().parseFromString('<tag id="id_test" class="class_test" any_attribute="any_attribute_test"></tag>', 'text/xml').documentElement;
  const attributesContainer = new AttributesContainer(element);
  attributesContainer.set('id', 'id_test_changed');
  t.truthy(element.getAttribute('id') === 'id_test_changed');
});

test('If value of attribute "class" is set, value will be correctly changed.', (t) => {
  const element = new DOMParser().parseFromString('<tag id="id_test" class="class_test" any_attribute="any_attribute_test"></tag>', 'text/xml').documentElement;
  const attributesContainer = new AttributesContainer(element);
  t.truthy(attributesContainer.get('class') === 'class_test');
  attributesContainer.set('class', 'class_test_changed');
  t.truthy(attributesContainer.get('class') === 'class_test_changed');
});

test('If value of attribute "class" is set, value will be correctly reflect to original element.', (t) => {
  const element = new DOMParser().parseFromString('<tag id="id_test" class="class_test" any_attribute="any_attribute_test"></tag>', 'text/xml').documentElement;
  const attributesContainer = new AttributesContainer(element);
  attributesContainer.set('class', 'class_test_changed');
  t.truthy(element.getAttribute('class') === 'class_test_changed');
});

test('If value of attribute "any_attribute" is set, value will be correctly changed.', (t) => {
  const element = new DOMParser().parseFromString('<tag id="id_test" class="class_test" any_attribute="any_attribute_test"></tag>', 'text/xml').documentElement;
  const attributesContainer = new AttributesContainer(element);
  t.truthy(attributesContainer.get('any_attribute') === 'any_attribute_test');
  attributesContainer.set('any_attribute', 'any_attribute_test_changed');
  t.truthy(attributesContainer.get('any_attribute') === 'any_attribute_test_changed');
});

test('If value of attribute "any_attribute" is set, value will not be reflect to original element.', (t) => {
  const element = new DOMParser().parseFromString('<tag id="id_test" class="class_test" any_attribute="any_attribute_test"></tag>', 'text/xml').documentElement;
  const attributesContainer = new AttributesContainer(element);
  attributesContainer.set('any_attribute', 'any_attribute_test_changed');
  t.truthy(element.getAttribute('any_attribute') === 'any_attribute_test');
});
