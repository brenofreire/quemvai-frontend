import { PoolBringing } from '../../models/pool/PoolBringing'
import { UnusedKeysModel } from '../../models/UnusedKeysModel'

export interface AddPoolBringing {
  add(params: AddPoolBringing.Params): Promise<AddPoolBringing.Model>
}

export namespace AddPoolBringing {
  export type Params = Omit<PoolBringing, UnusedKeysModel>

  export type Model = PoolBringing
}
