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
