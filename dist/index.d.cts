interface LoggerOptions {
    context?: string;
    enableDebug?: boolean;
    showTimestamp?: boolean;
}
declare class Logger {
    private options;
    constructor(options?: LoggerOptions);
    private timestamp;
    private buildTag;
    private contextTag;
    private print;
    info(msg: string): void;
    warn(msg: string): void;
    error(msg: string): void;
    debug(msg: string): void;
    table(headers: string[], rows: string[][]): void;
}

export { Logger };
