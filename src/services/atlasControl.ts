import APIAtlasV2 from 'src/api/atlasApi';
import { Estado } from 'src/interfaces/Estado.type';
import { Cidades } from 'src/interfaces/Cidades.type';

export const getEstados = async (): Promise<Estado[] | any> => {
  try {
    const response = await APIAtlasV2.get<Estado[]>('api/Atlas/GetEstados');
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject;
  }
};

export const getCidade = async (idCidade: number): Promise<Cidades[] | any> => {
  try {
    const response = await APIAtlasV2.get<Cidades[]>(`api/Atlas/GetCidade/${idCidade}`);
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject;
  }
};
