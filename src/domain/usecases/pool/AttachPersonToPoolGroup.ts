import { PoolGroupPerson } from '../../models/pool/PoolGroupPerson'
import { UnusedKeysModelWithStatus } from '../../models/UnusedKeysModel'

export namespace AttachPersonToPoolGroup {
  export type Params = Omit<PoolGroupPerson, UnusedKeysModelWithStatus>

  export type Model = PoolGroupPerson
}
