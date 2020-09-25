import { ResourceManagerInterface } from "@core/resourceManager"
import { StateManagerInterface } from "@core/stateManager"

export interface SceneInterface {
  resourceManager: ResourceManagerInterface
  stateManager: StateManagerInterface

  add(): SceneInterface
  update(): SceneInterface
  load(): SceneInterface
  unload(): SceneInterface
  start(): SceneInterface
}
