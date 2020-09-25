import { SceneInterface } from "@core/scene"
import {
  ResourceInterface,
  SoundInterface,
  TextureInterface
} from "@core/resources"
import { ResourceManagerInterface } from "@core/resourceManager"
import { StateManagerInterface } from "@core/stateManager"
import { ResourceLoaderInterface } from "@core/loader"

export class MainScene implements SceneInterface {
  resourceManager: ResourceManagerInterface
  stateManager: StateManagerInterface

  textures: { [key: string]: TextureInterface } = {}
  audios: { [key: string]: SoundInterface } = {}

  constructor(
    resourceManager: ResourceManagerInterface,
    stateManager: StateManagerInterface
  ) {
    this.resourceManager = resourceManager
    this.stateManager = stateManager
  }

  add(): SceneInterface {
    return this
  }

  load(): SceneInterface {
    this.resourceManager.register("/public/assets/images/tmp.png", "texture")
    this.resourceManager.register("/public/assets/images/tmp2.png", "texture")
    this.resourceManager.register("/public/assets/audio/tmp.mp3", "audio")

    const onProgress = (
      resource: ResourceInterface,
      loader: ResourceLoaderInterface
    ) => {}

    const onLoad = (
      resource: ResourceInterface,
      loader: ResourceLoaderInterface
    ) => {}

    this.resourceManager.load(onProgress, onLoad).then(() => {})

    return this
  }

  unload(): SceneInterface {
    return this
  }

  update(): SceneInterface {
    return this
  }

  start(): SceneInterface {
    return undefined
  }
}
