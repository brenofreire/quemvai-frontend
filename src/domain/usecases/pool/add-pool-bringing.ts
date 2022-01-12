import { PoolBringing } from '../../models/pool/pool-bringing'
import { UnusedKeysModel } from '../../models/unused-keys-model'

export interface AddPoolBringing {
  add(params: AddPoolBringing.Params): Promise<AddPoolBringing.Model>
}

export namespace AddPoolBringing {
  export type Params = Omit<PoolBringing, UnusedKeysModel>

  export type Model = PoolBringing
}
