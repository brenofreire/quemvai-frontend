import { LocalStorageAdapter } from '../../adapters/local-storage-adapter'

const makeLocalStorage = (): LocalStorageAdapter => new LocalStorageAdapter()

export default makeLocalStorage
