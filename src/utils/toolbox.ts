import configs from '../configs/config.json'

export const config = <K extends keyof typeof configs>(key: K): (typeof configs)[K] => configs[key]