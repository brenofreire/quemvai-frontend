import { GetStorage } from './get-storage'
import { SetStorage } from './set-storage'

export class LocalStorageAdapter implements GetStorage, SetStorage {
  set(key: string, value: any): void {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      localStorage.removeItem(key)
    }
  }

  get(key: string): any {
    return JSON.parse(localStorage.getItem(key) as string)
  }
}
