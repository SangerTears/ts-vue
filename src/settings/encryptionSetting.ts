import { isDevMode } from '/@/utils/env'

// system default cache time, in seconds
export const DEFAULT_CACHE_TIME = 60*60*24*7

export const cacheCiper = [{
    key: '_11111000001111@',
    iv: '11111000001111_',
}]

export const enableStorageEncryption = !isDevMode()