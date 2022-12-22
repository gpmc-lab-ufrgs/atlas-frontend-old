import api from './config';

export const getAllDistricts = async () => {
  const response = await api.get('/geojson');
  return response.data;
};

export const getDistrictBySigla = async (sigla: string) => {
  const response = await api.get(`/geojson/?sigla=${sigla}`);
  return response.data;
};
