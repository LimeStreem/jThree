import test from 'ava';
import XMLDOM from 'xmldom';
const DOMParser = XMLDOM.DOMParser;

import NodeUtility from '../../lib/Goml/NodeUtility';

test('Get index of NodeList which includes some other nodes by index in elements.', (t) => {
  const element = new DOMParser().parseFromString('<node id="test">textnode<childnode></childnode>textnode2</node>', 'text/xml').documentElement;
  t.truthy(NodeUtility.getNodeListIndexByElementIndex(element, 0) === 1);
});

test('Get index of NodeList which includes some other nodes by index in elements. (many)', (t) => {
  const element = new DOMParser().parseFromString(`<node id="test">
    textnode
    <childnode></childnode>
    textnode2
    textnode3
    <childnode></childnode>
    textnode4
    <childnode></childnode>
    textnode5
    </node>`, 'text/xml').documentElement;
  t.truthy(NodeUtility.getNodeListIndexByElementIndex(element, 2) === 5);
});

test('Get index of NodeList which includes some other nodes by negative index in elements.', (t) => {
  const element = new DOMParser().parseFromString(`<node id="test">
    textnode
    <childnode></childnode>
    textnode2
    textnode3
    <childnode></childnode>
    textnode4
    <childnode></childnode>
    textnode5
    </node>`, 'text/xml').documentElement;
  t.truthy(NodeUtility.getNodeListIndexByElementIndex(element, -1) === 5);
});

test('Get index of NodeList which includes some other nodes by negative index in elements.', (t) => {
  const element = new DOMParser().parseFromString(`<node id="test">
    textnode
    <childnode></childnode>
    textnode2
    textnode3
    <childnode></childnode>
    textnode4
    <childnode></childnode>
    textnode5
    </node>`, 'text/xml').documentElement;
  t.truthy(NodeUtility.getNodeListIndexByElementIndex(element, -1) === 5);
});

test('If target index of node is not found, return null.', (t) => {
  const element = new DOMParser().parseFromString(`<node id="test">
    textnode
    <childnode></childnode>
    textnode2
    textnode3
    <childnode></childnode>
    textnode4
    <childnode></childnode>
    textnode5
    </node>`, 'text/xml').documentElement;
  t.truthy(NodeUtility.getNodeListIndexByElementIndex(element, 10) === null);
});
