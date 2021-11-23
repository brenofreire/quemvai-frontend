import { AddAccount } from '../../../../domain/usecases'

export class MakeSignupMock implements AddAccount {
  public callsCount = 0

  add(params: AddAccount.Params): Promise<AddAccount.Model> {
    this.callsCount += 1

    return new Promise((res) => {
      res(params)
    })
  }
}
