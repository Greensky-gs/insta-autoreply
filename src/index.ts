import { config } from "dotenv";
import OpenAI from "openai";
import loader from "./loaders/loader";

config()

const openAI = new OpenAI({
    apiKey: process.env.openAIKey
})

loader(openAI)
