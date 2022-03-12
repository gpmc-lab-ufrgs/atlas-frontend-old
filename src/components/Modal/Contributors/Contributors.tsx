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

import * as Styles from "./styles";

interface Person {
	name: string;
	image: string;
	function?: string;
	institution: string;
	hasImage?: boolean;
}

const mainContributors:Person[] = [
	{
		name: 'Vinicius Brei',
		image: viniciusBrei,
		function: 'function',
		institution: 'UFRGS',
	},
	{
		name: 'Alex Sandy Pentland',
		image: alexSandy,
		function: 'function',
		institution: 'MIT',
	},
	{
		name: 'Mohsen Bahrami',
		image: mohsenBahrami,
		function: 'function',
		institution: 'MIT',
	},
	{
		name: 'Alina Flores',
		image: alinaFlores,
		function: 'function',
		institution: 'UFRGS',
	},
	{
		name: 'Ricardo Limongi',
		image: ricardoLimongi,
		function: 'function',
		institution: 'UFG',
	},
	{
		name: 'Leonardo Gomes',
		image: leonardoGomes,
		function: 'function',
		institution: 'Universidade de Brasília',
	},
	{
		name: 'Justin Anderson',
		image: justinAnderson,
		function: 'function',
		institution: 'MIT',
	},
]

const otherContributors: Person[] = [
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
		institution: 'undefined',
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
		institution: 'undefined',
		hasImage: true,
	},
	{
		name: 'Jaiany Rocha',
		image: jaianyRocha,
		institution: 'undefined',
		hasImage: true,
	},
	{
		name: 'Jheniffer Dany Lucas',
		image: jhenifferLucas,
		institution: 'undefined',
		hasImage: true,
	},
	{
		name: 'Luís Eduardo Meneguetti',
		image: luisMenegetti,
		institution: 'undefined',
		hasImage: true,
	},
	{
		name: 'Thales Martins',
		image: thalesMartins,
		institution: 'undefined',
		hasImage: false,
	},
	{
		name: 'Vilmar Oro Boff',
		image: vilmarBoff,
		institution: 'undefined',
		hasImage: true,
	},
];

const Contributors = () => {
	return (
		<ModalContainer title="Contributors">
			{mainContributors.map((mainContributor, index) => {
				return(
					<div key={index}>
						<Styles.contributorImage src={mainContributor.image} alt={mainContributor.name} />
						<Styles.personDatas>
							<Styles.personData>{mainContributor.name}</Styles.personData>
							<Styles.personData>
								<b>{mainContributor.function}</b>
							</Styles.personData>
							<Styles.personData>{mainContributor.institution}</Styles.personData>
						</Styles.personDatas>
					</div>
				);
			})}
			
			<br></br>
			<h2>Developers:</h2>
			<br></br>
			{otherContributors.map((otherContributor, index) => {
				return (
					<>
						<div key={index}>
							{otherContributor.hasImage ? (
									<Styles.contributorImage src={otherContributor.image} alt={otherContributor.name} />
								) : 
								(
									<Styles.avatarIconDiv>
										<Styles.avatarIcon src={otherContributor.image} alt={otherContributor.name} />
									</Styles.avatarIconDiv>
								)
							}

							<Styles.personDatas>
								<Styles.personData>{otherContributor.name}</Styles.personData>
								<Styles.personData>{otherContributor.institution}</Styles.personData>
							</Styles.personDatas>
						</div>
						{	
							index == 1 && (
								<>
									<h2>Researchers:</h2>
									<br></br>
								</>
							)
						}
					</>
				);
			})}
		</ModalContainer>
	);
};

export default Contributors;
