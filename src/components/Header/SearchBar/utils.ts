import { District } from "@store/contexts/featuresContext";

export function getSortedDistricts(features: District[]) {
  return features.sort((a: any, b: any) =>
    a?.properties.NM_MUN.localeCompare(b?.properties.NM_MUN)
  );
}

export function getFilteredDistricts(features: District[], query: string) {
  return features.filter(
    (item: any) =>
      item?.properties.NM_MUN.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
}
