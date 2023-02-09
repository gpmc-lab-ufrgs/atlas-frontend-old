import { AxiosResponse } from '@customTypes/axiosResponse';
import { State } from '@customTypes/state';
import stateEndpoint from '../config';
import { IStateService } from '../IStateService';

export class StateService implements IStateService {
  public async getAllStates(): Promise<State[]> {
    const response = (await stateEndpoint.get('/geojson')) as AxiosResponse<State[]>;
    return response.data;
  }
  public async getStateById(stateId: number): Promise<State> {
    const response = (await stateEndpoint.get(`/geojson/${stateId}`)) as AxiosResponse<State>;
    return response.data;
  }
}
