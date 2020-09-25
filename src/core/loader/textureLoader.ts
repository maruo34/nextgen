import { ResourceLoaderInterface } from "@core/loader/index"
import { TextureInterface } from "@core/resources"

export class TextureLoader implements ResourceLoaderInterface {
  private static instance: TextureLoader

  private constructor() {}

  public static getInstance(): TextureLoader {
    if (!TextureLoader.instance) {
      TextureLoader.instance = new TextureLoader()
    }

    return TextureLoader.instance
  }

  public load(resource: string): Promise<TextureInterface> {
    return undefined
  }
}
