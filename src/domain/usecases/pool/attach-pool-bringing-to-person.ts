import { PoolBringing } from '../../models/pool/pool-bringing'
import { UnusedKeysModelWithStatus } from '../../models/unused-keys-model'

export interface AttachPoolBringingToPerson {
  attach(params: AttachPoolBringingToPerson.Params): Promise<AttachPoolBringingToPerson.Model>
}

export namespace AttachPoolBringingToPerson {
  export type Params = Omit<PoolBringing, UnusedKeysModelWithStatus>

  export type Model = PoolBringing
}
