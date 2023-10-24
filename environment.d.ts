declare global {
    namespace NodeJS {
        interface ProcessEnv {
            openAIKey: string;
        }
    }
}

export {}