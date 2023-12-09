import APIAtlasV2 from 'src/api/atlasApi';
import { Estado } from 'src/interfaces/Estado.type';

export const getEstados = async (): Promise<Estado[] | any> => {
  try {
    const response = await APIAtlasV2.get<Estado[]>('api/Atlas/GetEstados');
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject;
  }
};
