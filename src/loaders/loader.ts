import { createReadStream } from "node:fs";
import { config } from '../utils/toolbox'
import OpenAI from "openai";

export default async(openai: OpenAI) => {
    if (!config('updatefile')) return
    const list = await openai.files.list().catch(console.log)
    console.log("🚀 ~ file: loader.ts:8 ~ async ~ list:", list)
    if (list && !!list.data[0]) {
        await openai.files.del(list.data[0].id).catch(console.log)
    }

    const pushed = await openai.files.create({
        file: createReadStream(config('trainFile')),
        purpose: 'fine-tune'
    }).catch(console.log)
    console.log("🚀 ~ file: loader.ts:17 ~ async ~ pushed:", pushed)
    if (!pushed) return

    const finetune = await openai.fineTunes.create({
        training_file: pushed.id,
        model: 'davinci'
    }).catch(console.log)
    console.log("🚀 ~ file: loader.ts:24 ~ async ~ finetune:", finetune)

    return finetune;
}