import viniciusBrei from '@assets/contribuitors/vinicius_brei.jpg';
import alexSandy from '@assets/contribuitors/alex_sandy.png';
import mohsenBahrami from '@assets/contribuitors/mohsen_bahrami.png';
import alinaFlores from '@assets/contribuitors/alina_flores.jpeg';
import ricardoLimongi from '@assets/contribuitors/ricardo_limongi.jpg';
import leonardoGomes from '@assets/contribuitors/leonardo_gomes.jpg';
import justinAnderson from '@assets/contribuitors/justin_anderson.png';
import anaBeatriz from '@assets/contribuitors/ana_beatriz.jpeg';
import julioCesar from '@assets/contribuitors/julio_cesar.jfif';
import enzoGabriel from '@assets/contribuitors/enzo_gabriel.jpeg';
import valdersonJunior from '@assets/contribuitors/valderson_junior.jpeg';
import arianoBangemann from '@assets/contribuitors/ariano_bangemann.png';
import carlaNetto from '@assets/contribuitors/carla_netto.jpg';
import fernandaKlein from '@assets/contribuitors/fernanda_klein.jpg';
import jaianyRocha from '@assets/contribuitors/jaiany_rocha.jpg';
import jessicaMiranda from '@assets/contribuitors/jessica_miranda.jpg';
import jhenifferLucas from '@assets/contribuitors/jheniffer_lucas.jpeg';
import luisMenegetti from '@assets/contribuitors/luis_meneguetti.jpg';
import pedroDeConto from '@assets/contribuitors/pedro_conto.png';
import rafaelPereira from '@assets/contribuitors/rafael_pereira.jpg';
import ruthSelina from '@assets/contribuitors/ruth_selina.jpg';

interface Person {
  name: string;
  image: string;
  function?: string;
  institution: string;
  hasImage?: boolean;
  socialProfile?: string;
}

export const mainResearchers: Person[] = [
  {
    name: 'Vinicius Brei',
    image: viniciusBrei,
    function: 'Lead Researcher',
    institution: 'UFRGS',
    hasImage: true,
    socialProfile: 'https://www.ufrgs.br/escoladeadministracao/professor/vinicius-andrade-brei',
  },
  {
    name: 'Alex Sandy Pentland',
    image: alexSandy,
    function: 'Principal Investigator',
    institution: 'MIT',
    hasImage: true,
  },
  {
    name: 'Mohsen Bahrami',
    image: mohsenBahrami,
    function: 'Lead Researcher',
    institution: 'MIT',
    hasImage: true,
  },
  {
    name: 'Alina Flores',
    image: alinaFlores,
    function: 'Lead Researcher',
    institution: 'UFRGS',
    hasImage: true,
    socialProfile: 'http://lattes.cnpq.br/2980780748375851',
  },
  {
    name: 'Ricardo Limongi',
    image: ricardoLimongi,
    function: 'Lead Researcher',
    institution: 'UFG',
    hasImage: true,
    socialProfile: 'http://lattes.cnpq.br/9466882455242939',
  },
  {
    name: 'Leonardo Gomes',
    image: leonardoGomes,
    function: 'Lead Software Developer',
    institution: 'Universidade de Brasília',
    hasImage: true,
    socialProfile: 'https://github.com/LeoSilvaGomes',
  },
  {
    name: 'Justin Anderson',
    image: justinAnderson,
    function: 'Lead Software Developer',
    institution: 'MIT',
    hasImage: true,
  },
];

export const developers: Person[] = [
  {
    name: 'Ana Beatriz',
    image: anaBeatriz,
    institution: 'Universidade de Brasília',
    hasImage: true,
    socialProfile: 'https://github.com/AnaBeatrizPontes',
  },
  {
    name: 'Enzo Gabriel',
    image: enzoGabriel,
    institution: 'Universidade de Brasília',
    hasImage: true,
    socialProfile: 'https://github.com/enzoggqs',
  },
  {
    name: 'Júlio César',
    image: julioCesar,
    institution: 'Universidade de Brasília',
    hasImage: true,
    socialProfile: 'https://github.com/Julio-eng',
  },
  {
    name: 'Valderson Junior',
    image: valdersonJunior,
    institution: 'Universidade de Brasília',
    hasImage: true,
    socialProfile: 'https://github.com/valdersonjr',
  },
];

export const researchers: Person[] = [
  {
    name: 'Ariano Bangemann',
    image: arianoBangemann,
    institution: 'UFRGS',
    hasImage: true,
    socialProfile: 'http://lattes.cnpq.br/6285622771537571',
  },
  {
    name: 'Carla Netto',
    image: carlaNetto,
    institution: 'University of Bologna',
    hasImage: true,
    socialProfile: 'https://www.unibo.it/sitoweb/carla.freitas/en',
  },
  {
    name: 'Fernanda Klein',
    image: fernandaKlein,
    institution: 'UFRGS',
    hasImage: true,
    socialProfile: 'http://lattes.cnpq.br/0182209534332837',
  },
  {
    name: 'Jaiany Rocha',
    image: jaianyRocha,
    institution: 'UFRGS',
    hasImage: true,
    socialProfile: 'http://lattes.cnpq.br/1097813774336960',
  },
  {
    name: 'Jéssica Miranda',
    image: jessicaMiranda,
    institution: 'UFRGS',
    hasImage: true,
    socialProfile: 'http://lattes.cnpq.br/3972534605652979',
  },
  {
    name: 'Jheniffer Dany Lucas',
    image: jhenifferLucas,
    institution: 'UFRGS',
    hasImage: true,
    socialProfile: 'https://lattes.cnpq.br/4711226999588931',
  },
  {
    name: 'Luís Eduardo Meneguetti',
    image: luisMenegetti,
    institution: 'UFRGS',
    hasImage: true,
    socialProfile: 'https://www.linkedin.com/in/luismeneguetti',
  },
  {
    name: 'Pedro de Conto',
    image: pedroDeConto,
    institution: 'UFRGS',
    hasImage: true,
    socialProfile: 'http://lattes.cnpq.br/6534969356603102',
  },
  {
    name: 'Rafael Pereira',
    image: rafaelPereira,
    institution: 'UFRGS',
    hasImage: true,
    socialProfile: 'http://lattes.cnpq.br/7208559081053768',
  },
  {
    name: 'Ruth Selina',
    image: ruthSelina,
    institution: 'UFRGS',
    hasImage: true,
    socialProfile: 'http://lattes.cnpq.br/1583654759584875',
  },
];
