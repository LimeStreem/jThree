import BasicRenderer from "../BasicRenderer";
import BasicRenderStage from "./Base/BasicRenderStage";
class SkyBoxStage extends BasicRenderStage {
    constructor(renderer: BasicRenderer) {
        super(renderer, require("./BuiltIn/Skybox.rsml"));
    }
}
export default SkyBoxStage;
