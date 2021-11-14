import { PoolGroup } from '../../models/pool/PoolGroup'
import { UnusedKeysModelWithStatus } from '../../models/UnusedKeysModel'

export interface CreatePoolGroup {
  create(params: CreatePoolGroup.Params): Promise<CreatePoolGroup.Model>
}

export namespace CreatePoolGroup {
  export type Params = Omit<PoolGroup, UnusedKeysModelWithStatus>

  export type Model = PoolGroup
}
