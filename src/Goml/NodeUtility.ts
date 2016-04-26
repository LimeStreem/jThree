class NodeUtility {
  public static getNodeListIndexByElementIndex(targetElement: HTMLElement, elementIndex: number): number {
    const nodeListArray: Node[] = Array.prototype.slice.call(targetElement.childNodes);
    elementIndex = elementIndex < 0 ? nodeListArray.length + elementIndex : elementIndex;
    return nodeListArray.indexOf(nodeListArray.filter((v) => {
      return v.nodeType === 1;
    })[elementIndex]);
  }
}

export default NodeUtility;
