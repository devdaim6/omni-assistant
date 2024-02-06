class Logger {
  private logLevel: string;
  private levels: string[];

  constructor(logLevel: string = "info") {
    this.logLevel = logLevel.toLowerCase();
    this.levels = ["debug", "info", "warn", "error"];

    // Validate log level
    if (!this.levels.includes(this.logLevel)) {
      console.error('Invalid log level. Defaulting to "info".');
      this.logLevel = "info";
    }
  }

  private log(level: string, message: string): void {
    const levelIndex = this.levels.indexOf(level);
    const currentLevelIndex = this.levels.indexOf(this.logLevel);

    // Only log if the level is equal to or higher than the configured log level
    if (levelIndex >= currentLevelIndex) {
      console.log(`[${level.toUpperCase()}] ${message}`);
    }
  }

  debug(message: string): void {
    this.log("debug", message);
  }

  info(message: string): void {
    this.log("info", message);
  }

  warn(message: string): void {
    this.log("warn", message);
  }

  error(message: string): void {
    this.log("error", message);
  }
}

export const logger = new Logger();
