import { PoolBringing } from '../../models/pool/PoolBringing'
import { UnusedKeysModelWithStatus } from '../../models/UnusedKeysModel'

export interface AttachPoolBringingToPerson {
  attach(
    params: AttachPoolBringingToPerson.Params
  ): Promise<AttachPoolBringingToPerson.Model>
}

export namespace AttachPoolBringingToPerson {
  export type Params = Omit<PoolBringing, UnusedKeysModelWithStatus>

  export type Model = PoolBringing
}
