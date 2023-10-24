const { existsSync, copyFileSync } = require('node:fs')

if (!existsSync('./src/configs/train.jsonl')) {
    throw new Error("No train.jsonl")
}
copyFileSync('./src/configs/train.jsonl', './dist/configs/train.jsonl')
