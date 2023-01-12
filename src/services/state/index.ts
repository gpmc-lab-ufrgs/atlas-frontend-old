import { AxiosResponse } from '@customTypes/axiosResponse';
import { State } from '@customTypes/state';

import stateEndpoint from './config';

export const getAllStates = async () => {
  const response = (await stateEndpoint.get('/geojson')) as AxiosResponse<State[]>;
  return response.data;
};

export const getStateById = async (stateId: number) => {
  const response = (await stateEndpoint.get(`/geojson/${stateId}`)) as AxiosResponse<State>;
  return response.data;
};

export default { getAllStates };
