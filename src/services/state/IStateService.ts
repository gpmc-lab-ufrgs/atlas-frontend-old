import { State } from '@customTypes/state';

export interface IStateService {
  getAllStates(): Promise<State[]>;
  getStateById(stateId: number): Promise<State>;
}
