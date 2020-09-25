import {
  SoundInterface,
  ResourceInterface,
  TextureInterface
} from "@core/resources"
import { ResourceLoaderInterface } from "@core/loader"

export interface ResourceManagerInterface {
  textures: { [key: string]: TextureInterface }
  audios: { [key: string]: SoundInterface }

  register(resource: string, type: string): void

  load(
      onProgress?: (resource: ResourceInterface, loader: ResourceLoaderInterface) => void,
      onLoad?: (resource: ResourceInterface, loader: ResourceLoaderInterface) => void
  ): Promise<any>

  getAudio(resource: string): ResourceInterface
  getTexture(resource: string): ResourceInterface
}

export class ResourceManager implements ResourceManagerInterface {
  textures: { [key: string]: TextureInterface } = {}
  audios: { [key: string]: SoundInterface } = {}

  getTexture(resource: string): ResourceInterface {
    if (this.textures[resource]) {
      return this.textures[resource]
    }

    throw new Error(`texture ${resource} not found`)
  }

  getAudio(resource: string): ResourceInterface {
    return undefined
  }

  register(resource: string, loader: string): void {}

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      return resolve()
    })
  }
}
