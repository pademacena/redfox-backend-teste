export class LoggerService {
  public async info(description: any) {
    const date = new Date()
    console.info(`[INFO] ${date.toISOString()} : ${description} `)
  }

  public async error(description: any) {
    const date = new Date()
    console.error(`[ERROR] ${date.toISOString()} : ${description} `);
  }

  public async debug(description: any) {
    const date = new Date()
    console.debug(`[DEBUG] ${date.toISOString()} : ${description} `);
  }
}