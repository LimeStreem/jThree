import test from 'ava';
import sinon from 'sinon';
import XMLDOM from 'xmldom';
const DOMParser = XMLDOM.DOMParser;

import AttributesContainer from '../../../lib/Goml/Attribute/AttributesContainer';

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

test('If value of attribute "id" is set, value will be correctly reflected to original element.', (t) => {
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

test('If value of attribute "class" is set, value will be correctly reflected to original element.', (t) => {
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

test('If value of attribute "any_attribute" is set, value will not be reflected to original element.', (t) => {
  const element = new DOMParser().parseFromString('<tag id="id_test" class="class_test" any_attribute="any_attribute_test"></tag>', 'text/xml').documentElement;
  const attributesContainer = new AttributesContainer(element);
  attributesContainer.set('any_attribute', 'any_attribute_test_changed');
  t.truthy(element.getAttribute('any_attribute') === 'any_attribute_test');
});

test('If value of attribute "any_attribute" is set and syncWithElement is called, value will be correctly reflected to original element.', (t) => {
  const element = new DOMParser().parseFromString('<tag id="id_test" class="class_test" any_attribute="any_attribute_test"></tag>', 'text/xml').documentElement;
  const attributesContainer = new AttributesContainer(element);
  attributesContainer.set('any_attribute', 'any_attribute_test_changed');
  attributesContainer.syncWithElement();
  t.truthy(element.getAttribute('any_attribute') === 'any_attribute_test_changed');
});

test('If new attribute is set, attribute count will be increase.', (t) => {
  const element = new DOMParser().parseFromString('<tag id="id_test" class="class_test" any_attribute="any_attribute_test"></tag>', 'text/xml').documentElement;
  const attributesContainer = new AttributesContainer(element);
  attributesContainer.set('new_set_attribute', 'new_set_attribute_test');
  t.truthy(Object.keys(attributesContainer._members).length === 4);
});

test('If new attribute is set, correct Attribute will be constructed.', (t) => {
  const element = new DOMParser().parseFromString('<tag id="id_test" class="class_test" any_attribute="any_attribute_test"></tag>', 'text/xml').documentElement;
  const attributesContainer = new AttributesContainer(element);
  attributesContainer.set('new_set_attribute', 'new_set_attribute_test');
  t.truthy(attributesContainer.get('new_set_attribute') === 'new_set_attribute_test');
});

test('If new attribute is defined, attribute count will be increase.', (t) => {
  const element = new DOMParser().parseFromString('<tag id="id_test" class="class_test" any_attribute="any_attribute_test"></tag>', 'text/xml').documentElement;
  const attributesContainer = new AttributesContainer(element);
  attributesContainer.define('new_defined_attribute', {
    default: 'new_defined_attribute_test',
  });
  t.truthy(Object.keys(attributesContainer._members).length === 4);
});

test('If new attribute is defined, correct Attribute will be constructed.', (t) => {
  const element = new DOMParser().parseFromString('<tag id="id_test" class="class_test" any_attribute="any_attribute_test"></tag>', 'text/xml').documentElement;
  const attributesContainer = new AttributesContainer(element);
  attributesContainer.define('new_defined_attribute', {
    default: 'new_defined_attribute_test',
    converter: 'string',
  });
  t.truthy(attributesContainer.get('new_defined_attribute') === 'new_defined_attribute_test');
});

test('If new attribute is defined with unknown converter, error will be thrown.', (t) => {
  const element = new DOMParser().parseFromString('<tag id="id_test" class="class_test" any_attribute="any_attribute_test"></tag>', 'text/xml').documentElement;
  const attributesContainer = new AttributesContainer(element);
  try {
    attributesContainer.define('new_defined_attribute', {
      default: 'new_defined_attribute_test',
      converter: 'unknown',
    });
    t.fail();
  } catch (e) {
    t.truthy(e instanceof Error);
    t.truthy(e.message === 'Converter "unknown" is not found.');
  }
});

test('If new attribute is defined with converter (int), specified type of value will be returned.', (t) => {
  const element = new DOMParser().parseFromString('<tag id="id_test" class="class_test" any_attribute="any_attribute_test"></tag>', 'text/xml').documentElement;
  const attributesContainer = new AttributesContainer(element);
  attributesContainer.define('new_defined_attribute', {
    default: 10,
    converter: 'int',
  });
  t.truthy(attributesContainer.get('new_defined_attribute') === 10);
});

test('If new attribute is defined with converter (int), string type of value will be returned by #getStr.', (t) => {
  const element = new DOMParser().parseFromString('<tag id="id_test" class="class_test" any_attribute="any_attribute_test"></tag>', 'text/xml').documentElement;
  const attributesContainer = new AttributesContainer(element);
  attributesContainer.define('new_defined_attribute', {
    default: 10,
    converter: 'int',
  });
  t.truthy(attributesContainer.getStr('new_defined_attribute') === '10');
});

test('If existed attribute is defined, Attribute will be updated except for value.', (t) => {
  const element = new DOMParser().parseFromString('<tag id="id_test" class="class_test" any_attribute="any_attribute_test"></tag>', 'text/xml').documentElement;
  const attributesContainer = new AttributesContainer(element);
  attributesContainer.set('existed_defined_attribute', '5');
  attributesContainer.define('existed_defined_attribute', {
    default: 10,
    converter: 'int',
  });
  t.truthy(attributesContainer.get('existed_defined_attribute') === 5);
});

test('If new attribute is defined, event will be correctly bound.', (t) => {
  const element = new DOMParser().parseFromString('<tag id="id_test" class="class_test" any_attribute="any_attribute_test"></tag>', 'text/xml').documentElement;
  const attributesContainer = new AttributesContainer(element);
  const onchangeHandler = sinon.spy();
  const ongetHandler = sinon.spy();
  attributesContainer.define('event_bound_attribute', {
    default: 10,
    converter: 'int',
    onchange: onchangeHandler,
    onget: ongetHandler,
  });
  t.truthy(attributesContainer._members.event_bound_attribute.listeners('change').length === 1);
  t.truthy(attributesContainer._members.event_bound_attribute.listeners('get').length === 1);
  attributesContainer.setResponsive(true);
  t.truthy(onchangeHandler.callCount === 1);
  attributesContainer.get('event_bound_attribute');
  t.truthy(ongetHandler.callCount === 1);
});

test('If event is bound but responsive flag is false, event will not be emitted.', (t) => {
  const element = new DOMParser().parseFromString('<tag id="id_test" class="class_test" any_attribute="any_attribute_test"></tag>', 'text/xml').documentElement;
  const attributesContainer = new AttributesContainer(element);
  const onchangeHandler = sinon.spy();
  const ongetHandler = sinon.spy();
  attributesContainer.define('event_bound_attribute', {
    default: 10,
    converter: 'int',
    onchange: onchangeHandler,
    onget: ongetHandler,
  });
  attributesContainer.setResponsive(false);
  t.truthy(onchangeHandler.callCount === 0);
  attributesContainer.get('event_bound_attribute');
  t.truthy(ongetHandler.callCount === 0);
});
