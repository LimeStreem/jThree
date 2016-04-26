import CanvasesNode from "./Nodes/TopLevel/CanvasesNode";
import ResourcesNode from "./Nodes/TopLevel/ResourcesNode";
import ScenesNode from "./Nodes/TopLevel/ScenesNode";
import TemplatesNode from "./Nodes/TopLevel/TemplatesNode";
import LoadersNode from "./Nodes/TopLevel/LoadersNode";
import GomlNode from "./Nodes/TopLevel/GomlNode";
import TriangleGeometryNode from "./Nodes/Geometries/TriangleGeometryNode";
import GridGeometryNode from "./Nodes/Geometries/GridGeometryNode";
import CubeGeometryNode from "./Nodes/Geometries/CubeGeometryNode";
import SphereGeometryNode from "./Nodes/Geometries/SphereGeometryNode";
import CircleGeometryNode from "./Nodes/Geometries/CircleGeometryNode";
import CylinderGeometryNode from "./Nodes/Geometries/CylinderGeometryNode";
import QuadGeometryNode from "./Nodes/Geometries/QuadGeometryNode";
import ConeGeometryNode from "./Nodes/Geometries/ConeGeometryNode";
import CanvasNode from "./Nodes/Canvases/CanvasNode";
import ViewPortNode from "./Nodes/Renderers/ViewPortNode";
import SceneNode from "./Nodes/SceneNode";
import MaterialNode from "./Nodes/Materials/MaterialNode";
import CameraNode from "./Nodes/SceneObjects/Cameras/CameraNode";
import OrthoCameraNode from "./Nodes/SceneObjects/Cameras/OrthoCameraNode";
import MeshNode from "./Nodes/SceneObjects/MeshNode";
import ObjectNode from "./Nodes/SceneObjects/ObjectNode";
import PointLightNode from "./Nodes/SceneObjects/Lights/PointLightNode";
import DirectionalLightNode from "./Nodes/SceneObjects/Lights/DirectionalLightNode";
import AreaLightNode from "./Nodes/SceneObjects/Lights/AreaLightNode";
import SpotLightNode from "./Nodes/SceneObjects/Lights/SpotLightNode";
import SceneLightNode from "./Nodes/SceneObjects/Lights/SceneLightNode";
import PMXNode from "../PMX/Goml/PMXNode";
import TextureNode from "./Nodes/Texture/TextureNode";
import CubeTextureNode from "./Nodes/Texture/CubeTextureNode";
import TemplateNode from "./Nodes/Templates/TemplateNode";
import LoaderNode from "./Nodes/Loaders/LoaderNode";
// import PMXMorphNode from "../PMX/Goml/PMXMorphNode";
// import PMXBoneNode from "../PMX/Goml/PMXBoneNode";
// import PMXMorphsNode from "../PMX/Goml/PMXMorphsNode";
// import PMXBonesNode from "../PMX/Goml/PMXBonesNode";
import VMDNode from "../VMD/Goml/VMDNode";
import XNode from "../X/Goml/XNode";
import ImportNode from "./Nodes/Imports/ImportNode";
import ImportsNode from "./Nodes/TopLevel/ImportsNode";


const gomlList = {
  "canvases": CanvasesNode,
  "resources": ResourcesNode,
  "scenes": ScenesNode,
  "templates": TemplatesNode,
  "loaders": LoadersNode,
  "imports": ImportsNode,
  "goml": GomlNode,
  "tri": TriangleGeometryNode,
  "grid": GridGeometryNode,
  "cube": CubeGeometryNode,
  "sphere": SphereGeometryNode,
  "circle": CircleGeometryNode,
  "cylinder": CylinderGeometryNode,
  "quad": QuadGeometryNode,
  "cone": ConeGeometryNode,
  "canvas": CanvasNode,
  "viewport": ViewPortNode,
  "scene": SceneNode,
  "material": MaterialNode,
  "camera": CameraNode,
  "ocamera": OrthoCameraNode,
  "mesh": MeshNode,
  "object": ObjectNode,
  "plight": PointLightNode,
  "dlight": DirectionalLightNode,
  "alight": AreaLightNode,
  "slight": SpotLightNode,
  "scenelight": SceneLightNode,
  "pmx": PMXNode,
  "texture": TextureNode,
  "cubetexture": CubeTextureNode,
  "template": TemplateNode,
  "loader": LoaderNode,
  // "morph": PMXMorphNode,
  // "bone": PMXBoneNode,
  // "morphs": PMXMorphsNode,
  // "bones": PMXBonesNode,
  "vmd": VMDNode,
  "x": XNode,
  "import": ImportNode,
};

export default gomlList;
