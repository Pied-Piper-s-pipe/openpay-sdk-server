import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { NotFoundError } from '../error';

export class HttpClient {
  private baseUrl: string;
  private timeout: number;

  constructor(baseUrl: string, timeout: number = 5000) {
    this.baseUrl = baseUrl;
    this.timeout = timeout;
  }

  private getConfig(headers?: Record<string, string>): AxiosRequestConfig {
    return {
      baseURL: this.baseUrl,
      timeout: this.timeout,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };
  }

  public async get<T>(
    path: string,
    params?: Record<string, any>,
    headers?: Record<string, string>,
  ): Promise<T> {
    const config = this.getConfig(headers);
    config.params = this.filterEmptyParams(params);
    try {
      const response: AxiosResponse<T> = await axios.get(path, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  public async post<T, U>(
    path: string,
    data?: U,
    headers?: Record<string, string>,
  ): Promise<T> {
    const config = this.getConfig(headers);
    try {
      const response: AxiosResponse<T> = await axios.post(path, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: any): never {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const { status, data } = error.response;
        if (status === 422) {
          throw new NotFoundError('Entity not found');
        } else {
          throw new Error(
            `Request failed with status code ${status}: ${JSON.stringify(data)}`,
          );
        }
      } else if (error.request) {
        throw new Error('No response received from server');
      } else {
        throw new Error(`Request setup failed: ${error.message}`);
      }
    } else {
      throw new Error(`An unknown error occurred: ${error.message}`);
    }
  }

  private filterEmptyParams(
    params?: Record<string, any>,
  ): Record<string, any> | undefined {
    if (!params) return undefined;

    const filteredParams: Record<string, any> = {};
    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        filteredParams[key] = value;
      }
    });

    return filteredParams;
  }
}
