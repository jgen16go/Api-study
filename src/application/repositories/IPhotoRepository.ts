import { Photo } from '../../domain/models/entity/photo'
import { RepositoryResult } from './ types'

export type PhotoRepositoryResult = RepositoryResult<Photo>

export interface IPhotoRepository {
  findAll(): Promise<PhotoRepositoryResult>
}
