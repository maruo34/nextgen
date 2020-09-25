import { ResourceInterface } from "@core/resources"

export interface ResourceLoaderInterface {
  load(resource: string, forceLoad?: boolean): Promise<ResourceInterface>
}
