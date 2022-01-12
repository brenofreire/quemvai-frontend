import { PoolGroupPerson } from '../../models/pool/pool-group-person'
import { UnusedKeysModelWithStatus } from '../../models/unused-keys-model'

export namespace AttachPersonToPoolGroup {
  export type Params = Omit<PoolGroupPerson, UnusedKeysModelWithStatus>

  export type Model = PoolGroupPerson
}
