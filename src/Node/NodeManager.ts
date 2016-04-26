import JThreeObject from "../Base/JThreeObject";
import IContextComponent from "../IContextComponent";
import ContextComponents from "../ContextComponents";
import GomlConfigurator from "./GomlConfigurator";

class NodeManager extends JThreeObject implements IContextComponent {
  public configurator: GomlConfigurator = new GomlConfigurator();

  constructor() {
    super();
  }

  public getContextComponentIndex(): number {
    return ContextComponents.NodeManager;
  }
}

export default NodeManager;
