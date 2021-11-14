import { PoolPerson } from '../models/PoolPerson'
import { UnusedKeysModel } from '../models/UnusedKeysModel'

export interface CreatePoolPerson {
  create(params: CreatePoolPerson.Params): Promise<CreatePoolPerson.Model>
}

export namespace CreatePoolPerson {
  export type Params = Omit<PoolPerson, UnusedKeysModel>

  export type Model = PoolPerson
}
