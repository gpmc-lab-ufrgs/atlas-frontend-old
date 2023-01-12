import { AxiosResponse as AxiosResponseData } from 'axios';

export interface AxiosResponse<T> extends AxiosResponseData {
  data: T;
}
