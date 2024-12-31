import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor(path: string) {
    this.axiosInstance = axios.create({
      baseURL: this.constructUrl(path),
      headers: this.getDefaultHeaders(),
    });

    this.axiosInstance.interceptors.response.use(
      (response) => this.handleSuccess(response),
      (error) => this.handleError(error),
    );
  }

  public get = async <T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    return this.axiosInstance.get(url, config);
  };

  public post = async <T>(
    url: string,
    data?: Record<string, unknown>,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    return this.axiosInstance.post(url, data, config);
  };

  public put = async <T>(
    url: string,
    data?: Record<string, unknown>,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    return this.axiosInstance.put(url, data, config);
  };

  public delete = async <T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    return this.axiosInstance.delete(url, config);
  };

  private getDefaultHeaders = () => {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  };

  private constructUrl = (path: string) => {
    return 'http://localhost:3000' + path;
    return `${process.env.REACT_APP_API_URL}${path}`;
  };

  private handleSuccess = (response: AxiosResponse) => {
    return response.data;
  };

  private handleError = (error: unknown) => {
    // Customize error handling here
    console.error('API Error:', error);
    return Promise.reject(error);
  };
}

export default ApiService;
