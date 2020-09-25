import { ResourceLoaderInterface } from "@core/loader/index"
import { SoundInterface } from "@core/resources"

export class AudioLoader implements ResourceLoaderInterface {
  private static instance: AudioLoader

  private constructor() {}

  public static getInstance(): AudioLoader {
    if (!AudioLoader.instance) {
      AudioLoader.instance = new AudioLoader()
    }

    return AudioLoader.instance
  }

  public load(resource: string): Promise<SoundInterface> {
    return undefined
  }
}
