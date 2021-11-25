import faker from 'faker'
import { AccountStatusEnum } from '../../../../domain/models'
import { AddAccount } from '../../../../domain/usecases'

export const mockLoggedAccount = {
  id: 1,
  createdAt: new Date().toISOString(),
  email: 'fake@example.com',
  username: 'Fake Name',
  password: 'fake!password',
  status: AccountStatusEnum.ACTIVE,
  updatedAt: new Date().toISOString(),
  accessToken: faker.internet.password(),
}
export class MakeSignupMock implements AddAccount {
  public callsCount = 0

  public add(_: AddAccount.Params): Promise<AddAccount.Model> {
    this.callsCount += 1

    return new Promise((res) => {
      res(mockLoggedAccount)
    })
  }
}
