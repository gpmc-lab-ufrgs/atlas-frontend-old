import { Feature } from '@customTypes/feature';

export function getSortedDistricts(features: Feature[]) {
  return features?.sort((a: any, b: any) =>
    a?.properties.NM_MUN.localeCompare(b?.properties.NM_MUN)
  );
}

export function getFilteredDistricts(features: Feature[], query: string) {
  return features?.filter(
    (item: any) =>
      item?.properties.NM_MUN.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
}
