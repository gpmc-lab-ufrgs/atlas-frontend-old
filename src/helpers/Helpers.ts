import { Estado } from 'src/interfaces/Estado.type';

export const ReturnEstadoPorId = (id: number, lstEstados: Estado[]): Estado[] => {
  const estadoEncontrado: Estado[] = lstEstados.filter((est) => est.cdEstado == id);
  return estadoEncontrado;
};

export const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
  arr.reduce((groups, item) => {
    (groups[key(item)] ||= []).push(item);
    return groups;
  }, {} as Record<K, T[]>);
