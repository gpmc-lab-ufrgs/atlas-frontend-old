
import viniciusBrei from '@assets/vinicius_brei.jpg';
import alexSandy from '@assets/alex_sandy.png';
import mohsenBahrami from '@assets/mohsen_bahrami.png';
import alinaFlores from '@assets/alina_flores.png';
import ricardoLimongi from '@assets/ricardo_limongi.png';
import leonardoGomes from '@assets/leonardo_gomes.jpg';
import justinAnderson from '@assets/justin_anderson.png';
import enzoGabriel from '@assets/enzo_gabriel.jpg';
import valdersonJunior from '@assets/valderson_junior.png';
import anaLuisa from '@assets/avatar_icon.svg';
import andreonMagagna from '@assets/andreon_magagna.jpg';
import carlaNetto from '@assets/carla_netto.jpg';
import jaianyRocha from '@assets/jaiany_rocha.png';
import jhenifferLucas from '@assets/jheniffer_lucas.jpg';
import luisMenegetti from '@assets/luis_meneguetti.jpg';
import thalesMartins from '@assets/avatar_icon.svg';
import vilmarBoff from '@assets/vilmar_boff.png';

interface Person {
	name: string;
	image: string;
	function?: string;
	institution: string;
	hasImage?: boolean;
}

export const mainContributors: Person[] = [
	{
		name: 'Vinicius Brei',
		image: viniciusBrei,
		function: 'Lead Researcher',
		institution: 'UFRGS',
	},
	{
		name: 'Alex Sandy Pentland',
		image: alexSandy,
		function: 'Principal Investigator',
		institution: 'MIT',
	},
	{
		name: 'Mohsen Bahrami',
		image: mohsenBahrami,
		function: 'Lead Researcher',
		institution: 'MIT',
	},
	{
		name: 'Alina Flores',
		image: alinaFlores,
		function: 'Lead Researcher',
		institution: 'UFRGS',
	},
	{
		name: 'Ricardo Limongi',
		image: ricardoLimongi,
		function: 'Lead Researcher',
		institution: 'UFG',
	},
	{
		name: 'Leonardo Gomes',
		image: leonardoGomes,
		function: 'Lead Software Developer',
		institution: 'Universidade de Brasília',
	},
	{
		name: 'Justin Anderson',
		image: justinAnderson,
		function: 'Lead Software Developer',
		institution: 'MIT',
	},
];

export const otherContributors: Person[] = [
	{
		name: 'Enzo Gabriel',
		image: enzoGabriel,
		institution: 'Universidade de Brasília',
		hasImage: true,
	},
	{
		name: 'Valderson Junior',
		image: valdersonJunior,
		institution: 'Universidade de Brasília',
		hasImage: true,
	},
	{
		name: 'Ana Luisa',
		image: anaLuisa,
		institution: '',
		hasImage: false,
	},

	{
		name: 'Andreon Magagna',
		image: andreonMagagna,
		institution: 'UFRGS',
		hasImage: true,
	},

	{
		name: 'Carla Netto',
		image: carlaNetto,
		institution: '',
		hasImage: true,
	},
	{
		name: 'Jaiany Rocha',
		image: jaianyRocha,
		institution: '',
		hasImage: true,
	},
	{
		name: 'Jheniffer Dany Lucas',
		image: jhenifferLucas,
		institution: '',
		hasImage: true,
	},
	{
		name: 'Luís Eduardo Meneguetti',
		image: luisMenegetti,
		institution: '',
		hasImage: true,
	},
	{
		name: 'Thales Martins',
		image: thalesMartins,
		institution: '',
		hasImage: false,
	},
	{
		name: 'Vilmar Oro Boff',
		image: vilmarBoff,
		institution: '',
		hasImage: true,
	},
];