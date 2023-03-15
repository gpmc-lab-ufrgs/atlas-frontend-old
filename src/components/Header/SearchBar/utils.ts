import { District } from '@customTypes/district';

export function getSortedDistricts(districts: District[]) {
  return districts?.sort((a: any, b: any) => a?.properties.NM_MUN.localeCompare(b?.properties.NM_MUN));
}

export function getFilteredDistricts(districts: District[], query: string) {
  return districts?.filter((item: any) => item?.properties.NM_MUN.toLowerCase().indexOf(query.toLowerCase()) !== -1);
}
