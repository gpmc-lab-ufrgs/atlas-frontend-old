import { ModalContainer } from '@components/Modal';
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

import './styles.css';

interface Person {
	name: string;
	image: string;
	function: string;
	institution: string;
}

const allContributors: Person[] = [
	{
		name: 'Vinicius Brei',
		image: viniciusBrei,
		function: '',
		institution: '',
	},
	{
		name: 'Alex Sandy Pentland',
		image: alexSandy,
		function: '',
		institution: '',
	},
	{
		name: 'Mohsen Bahrami',
		image: mohsenBahrami,
		function: '',
		institution: '',
	},
	{
		name: 'Alina Flores',
		image: alinaFlores,
		function: '',
		institution: '',
	},
	{
		name: 'Ricardo Limongi',
		image: ricardoLimongi,
		function: '',
		institution: '',
	},
	{
		name: 'Leonardo Gomes',
		image: leonardoGomes,
		function: '',
		institution: '',
	},
	{
		name: 'Justin Anderson',
		image: justinAnderson,
		function: '',
		institution: '',
	},
	{
		name: 'Enzo Gabriel',
		image: enzoGabriel,
		function: '',
		institution: '',
	},
	{
		name: 'Valderson Junior',
		image: valdersonJunior,
		function: '',
		institution: '',
	},
	{
		name: 'Ana Luisa',
		image: anaLuisa,
		function: '',
		institution: '',
	},

	{
		name: 'Andreon Magagna',
		image: andreonMagagna,
		function: '',
		institution: '',
	},

	{
		name: 'Carla Netto',
		image: carlaNetto,
		function: '',
		institution: '',
	},
	{
		name: 'Jaiany Rocha',
		image: jaianyRocha,
		function: '',
		institution: '',
	},
	{
		name: 'Jheniffer Dany Lucas',
		image: jhenifferLucas,
		function: '',
		institution: '',
	},
	{
		name: 'Luís Eduardo Meneguetti',
		image: luisMenegetti,
		function: '',
		institution: '',
	},
	{
		name: 'Thales Martins',
		image: thalesMartins,
		function: '',
		institution: '',
	},
	{
		name: 'Vilmar Oro Boff',
		image: vilmarBoff,
		function: '',
		institution: '',
	},
];

const Contributors = () => {
	return (
		<ModalContainer title="Contributors">
			{allContributors.map((opcao, index) => {
				return (
					<div key={index}>
						<img className="img" src={opcao.image} alt={opcao.name} />
					</div>
				);
			})}
		</ModalContainer>
	);
};

export default Contributors;
