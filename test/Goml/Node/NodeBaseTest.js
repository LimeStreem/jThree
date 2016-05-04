import test from 'ava';
import sinon from 'sinon';
import XMLDOM from 'xmldom';
const DOMParser = XMLDOM.DOMParser;

import NodeBase from '../../../lib/Goml/Node/NodeBase';
import NodeUtility from '../../../lib/Goml/NodeUtility';

test('If setElement is called more than twice, Error will be risen.', (t) => {
  const element = new DOMParser().parseFromString('<node id="test"></node>', 'text/xml').documentElement;
  const node = new NodeBase();
  node.setElement(element);
  const element2 = new DOMParser().parseFromString('<node2 id="test"></node2>', 'text/xml').documentElement;
  try {
    node.setElement(element2);
    t.fail();
  } catch (e) {
    t.truthy(e instanceof Error);
    t.truthy(e.message === 'This method is expected to be called just once.');
  }
});

test('When new node is added to child of node, node will be append to children.', (t) => {
  const parentElement = new DOMParser().parseFromString('<parentelement id="test"></parentelement>', 'text/xml').documentElement;
  const parentNode = new NodeBase();
  parentNode.setElement(parentElement);
  const childElement = new DOMParser().parseFromString('<childelement id="test"></childelement>', 'text/xml').documentElement;
  const childNode = new NodeBase();
  childNode.setElement(childElement);
  parentNode.addChild(childNode);
  t.truthy(parentNode.children[0] === childNode);
  t.truthy(childNode.parent === parentNode);
});

test('When new node is added to child of node, element is also updated.', (t) => {
  const parentElement = new DOMParser().parseFromString('<parentelement id="test"></parentelement>', 'text/xml').documentElement;
  const parentNode = new NodeBase();
  parentNode.setElement(parentElement);
  const childElement = new DOMParser().parseFromString('<childelement id="test"></childelement>', 'text/xml').documentElement;
  const childNode = new NodeBase();
  childNode.setElement(childElement);
  parentNode.addChild(childNode);
  t.truthy(parentElement.childNodes[NodeUtility.getNodeListIndexByElementIndex(parentElement, 0)] === childElement);
  t.truthy(childElement.parentNode === parentElement);
});
