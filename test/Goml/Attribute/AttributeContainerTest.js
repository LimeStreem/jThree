import test from 'ava';
import sinon from 'sinon';
import XMLDOM from 'xmldom';
const DOMParser = XMLDOM.DOMParser;

import Attribute from '../../../lib/Goml/Attribute/Attribute';
import AttributesContainer from '../../../lib/Goml/Attribute/AttributesContainer';
import NumberConverter from '../../../lib/Goml/Converter/NumberConverter';

test('Construct attribute container with correct attribute to element', (t) => {
  const element = new DOMParser().parseFromString('<tag id="test"></tag>', 'text/xml');
  const attributesContainer = new AttributesContainer(element);
  test.truthy(attributesContainer.get('id') === 'test');
});

test('Construct attribute container with correct attribute to element (many)', (t) => {
  const element = new DOMParser().parseFromString('<tag id="id_test" class="class_test" any_attribute="any_attribute_test"></tag>', 'text/xml');
  const attributesContainer = new AttributesContainer(element);
  test.truthy(attributesContainer.get('id') === 'id_test');
  test.truthy(attributesContainer.get('class') === 'class_test');
  test.truthy(attributesContainer.get('any_attribute') === 'any_attribute_test');
});
