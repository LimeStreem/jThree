class NodeUtility {
  /**
   * Get index of NodeList converted from index in Element
   * @param  {HTMLElement} targetElement Parent element of search target elements
   * @param  {number}      elementIndex  Index in element
   * @return {number}                    Index in NodeList
   */
  public static getNodeListIndexByElementIndex(targetElement: HTMLElement, elementIndex: number): number {
    const nodeListArray: Node[] = Array.prototype.slice.call(targetElement.childNodes);
    elementIndex = elementIndex < 0 ? nodeListArray.length + elementIndex : elementIndex;
    return nodeListArray.indexOf(nodeListArray.filter((v) => {
      return v.nodeType === 1;
    })[elementIndex]);
  }
}

export default NodeUtility;
