import { config } from './config';

export class URLBuilder {
  private readonly environment: string;
  private readonly language: string;
  private readonly service?: string;

  constructor(environment: string, language: string, service?: string) {
    this.environment = environment;
    this.language = language;
    this.service = service;
  }

  buildURL(path: string): string {
    if (this.service) {
      const baseURL = config[this.environment][this.service];
      return `${baseURL}${path}`;
    }
    else {
      const baseURL = config[this.environment][this.language];
      return `${baseURL}${path}`;
    }
  }
}