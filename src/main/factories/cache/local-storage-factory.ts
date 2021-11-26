import { LocalStorageAdapter } from '../../../infra/cache'

const makeLocalStorage = (): LocalStorageAdapter => new LocalStorageAdapter()

export default makeLocalStorage
