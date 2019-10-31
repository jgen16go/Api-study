import { IPhotoRepository, PhotoRepositoryResult } from '../../application/repositories/IPhotoRepository'

export class PhotoRepository implements IPhotoRepository{
  constructor(
    readonly json: any
  ) {}

  async findAll(): Promise<PhotoRepositoryResult> {
    return await this.all()
  }

  all(): any {

  }
}
