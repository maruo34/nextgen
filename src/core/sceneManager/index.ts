import { SceneInterface } from "@core/scene"

export class SceneManager {
  protected currentScene: SceneInterface
  protected scenes: Array<SceneInterface>

  constructor() {}

  load() {}

  setScene(scene: SceneInterface): void {}
}
