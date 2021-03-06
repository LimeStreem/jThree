import IViewport from "../Canvas/IViewport";
import ICanvasContainer from "../Canvas/ICanvasContainer";
import IDisposable from "../../Base/IDisposable";
import Scene from "../Scene";
import RBO from "../Resources/RBO/RBO";
import BufferSet from "./BufferSet";
import RenderPath from "./RenderPath";
import Camera from "../SceneObjects/Camera/Camera";
import IGLContainer from "../Canvas/GL/IGLContainer";
/**
 * 特定領域の描画を司るクラスのインターフェース
 * @type {[type]}
 */
interface IRenderer extends NodeJS.EventEmitter, IDisposable, IGLContainer, ICanvasContainer, IViewport {
  /**
   * [The camera instance that this renderer refer to]
   * @type {Camera}
   */
  camera: Camera;

  /**
   * [The render path that this renderer will use]
   * @type {RenderPath}
   */
  renderPath: RenderPath;

  /**
   * The buffer set that contains buffers for this renderer.
   * @type {BufferSet}
   */
  bufferSet: BufferSet;

  /**
   * [defaultRenderBuffer description]
   * @type {RBO}
   */
  defaultRenderBuffer: RBO;

  render(scene: Scene): void;

  beforeRender(): void;

  afterRender(): void;

  applyViewport(isDefaultBuffer: boolean): void;

}

export default IRenderer;
