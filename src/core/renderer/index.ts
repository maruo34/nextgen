import { SceneInterface } from "@core/scene"

export interface RendererInterface {
  render(scene: SceneInterface): void
}

export default class Renderer implements RendererInterface {
  constructor(canvas: HTMLCanvasElement) {}

  render(scene: SceneInterface): void {
    // console.log("render", scene);
  }
}
