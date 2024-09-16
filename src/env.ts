interface Env {
  readonly DATABASE_URL: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}
