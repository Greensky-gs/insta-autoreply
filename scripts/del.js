const { existsSync, rm } = require('node:fs')

if (existsSync('./dist')) rm('./dist', { recursive: true }, () => {})