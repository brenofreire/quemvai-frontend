import { PoolBringing } from '../models/PoolBringing'
import { UnusedKeysModel } from '../models/UnusedKeysModel'

export interface CreatePoolBringingPerson {
  create(
    params: CreatePoolBringingPerson.Params
  ): Promise<CreatePoolBringingPerson.Model>
}

export namespace CreatePoolBringingPerson {
  export type Params = Omit<PoolBringing, UnusedKeysModel | 'itemName'>

  export type Model = PoolBringing
}
