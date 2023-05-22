import { District } from '@customTypes/district';

function removeAccents(str: string) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function getSortedDistricts(districts: District[]) {
  return districts?.sort((a: any, b: any) =>
    removeAccents(a?.properties.NM_MUN).localeCompare(removeAccents(b?.properties.NM_MUN))
  );
}

export function getFilteredDistricts(districts: District[], query: string) {
  const normalizedQuery = removeAccents(query.toLowerCase());
  return districts?.filter((item: any) =>
    removeAccents(item?.properties.NM_MUN.toLowerCase()).indexOf(normalizedQuery) !== -1
  );
}
