import { District } from '@customTypes/district';

export function getSortedDistricts(districts: District[]) {
  return districts?.sort((a: any, b: any) =>
    a?.properties.MUNICIPALITY_NAME.localeCompare(b?.properties.MUNICIPALITY_NAME),
  );
}

export function getFilteredDistricts(districts: District[], query: string) {
  return districts?.filter(
    (item: any) => item?.properties.MUNICIPALITY_NAME.toLowerCase().indexOf(query.toLowerCase()) !== -1,
  );
}
