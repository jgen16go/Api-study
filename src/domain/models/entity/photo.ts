import { Entity } from './types'

export class Photo implements Entity {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly description: string,
    readonly file: string,
    readonly fNumber: string,
    readonly ISO: string,
    readonly ShutterSpeed: string,
    readonly body: string,
    readonly lens: string,
    readonly isFlash: boolean,
  ) {}
}
