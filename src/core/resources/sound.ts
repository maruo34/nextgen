import { ResourceInterface } from "@core/resources/resource"

export interface SoundInterface extends ResourceInterface {
  play(): void
  stop(): void
}
