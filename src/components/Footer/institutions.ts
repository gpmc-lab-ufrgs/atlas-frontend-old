import logoUfrgsNegative from "@assets/logoUfgNegativo.png";
import logoUfgNegative from "@assets/logoUfrgsNegativo.png";
import logoSabanciNormal from "@assets/logoSabanciNormal.png";
import logoUnb from "@assets/logoUnb.png";
import logoNCF from "@assets/logoNCF.png";

interface Institution {
  name: string;
  logoImage: string;
  size: number;
}

const institutionLogoImages: Institution[] = [
  {
    name: "Federal University of Rio Grande do Sul",
    logoImage: logoUfrgsNegative,
    size: 50,
  },
  {
    name: "Federal University of Goiás",
    logoImage: logoUfgNegative,
    size: 50,
  },
  {
    name: "Sabanci University",
    logoImage: logoSabanciNormal,
    size: 40,
  },
  {
    name: "Federal University of Brasília",
    logoImage: logoUnb,
    size: 30,
  },
  {
    name: "New College of Florida",
    logoImage: logoNCF,
    size: 30,
  },
];

export default institutionLogoImages;
