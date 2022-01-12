import { PoolGroup } from '../../models/pool/pool-group'
import { UnusedKeysModelWithStatus } from '../../models/unused-keys-model'

export interface CreatePoolGroup {
  create(params: CreatePoolGroup.Params): Promise<CreatePoolGroup.Model>
}

export namespace CreatePoolGroup {
  export type Params = Omit<PoolGroup, UnusedKeysModelWithStatus>

  export type Model = PoolGroup
}
