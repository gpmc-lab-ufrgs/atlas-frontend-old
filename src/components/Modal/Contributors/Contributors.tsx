import { ModalContainer } from '@components/Modal';

import { mainResearchers, developers, researchers } from './contributorsData';

import * as Styles from './styles';

const Contributors = () => (
	<ModalContainer title="Contributors">
		<Styles.gridDisplay>
			{mainResearchers.map((mainResearcher, index) => (
				<div key={index}>
					<Styles.contributorImage
						src={mainResearcher.image}
						alt={mainResearcher.name}
					/>

					<Styles.personDatas>
						<Styles.personData>{mainResearcher.name}</Styles.personData>

						<Styles.personData>
							<b>{mainResearcher.function}</b>
						</Styles.personData>

						<Styles.personData>{mainResearcher.institution}</Styles.personData>
					</Styles.personDatas>
				</div>
			))}
		</Styles.gridDisplay>

		<Styles.contributorsFunctionDiv>
			<h2>Developers</h2>
		</Styles.contributorsFunctionDiv>

		<Styles.gridDisplay>
			{developers.map((developer, index) => (
				<div key={index}>
					{developer.hasImage ? (
						<Styles.contributorImage
							src={developer.image}
							alt={`Imagem de ${developer.name}`}
						/>
					) : (
						<Styles.avatarIconDiv>
							<Styles.avatarIcon src={developer.image} alt={developer.name} />
						</Styles.avatarIconDiv>
					)}
					<Styles.personDatas>
						<Styles.personData>{developer.name}</Styles.personData>
						<Styles.personData>{developer.institution}</Styles.personData>
					</Styles.personDatas>
				</div>
			))}
		</Styles.gridDisplay>

		<Styles.contributorsFunctionDiv>
			<h2>Researchers</h2>
		</Styles.contributorsFunctionDiv>

		<Styles.gridDisplay>
			{researchers.map((researcher, index) => (
				<div key={index}>
					{researcher.hasImage ? (
						<Styles.contributorImage
							src={researcher.image}
							alt={`Imagem de ${researcher.name}`}
						/>
					) : (
						<Styles.avatarIconDiv>
							<Styles.avatarIcon src={researcher.image} alt={researcher.name} />
						</Styles.avatarIconDiv>
					)}
					<Styles.personDatas>
						<Styles.personData>{researcher.name}</Styles.personData>
						<Styles.personData>{researcher.institution}</Styles.personData>
					</Styles.personDatas>
				</div>
			))}
		</Styles.gridDisplay>
	</ModalContainer>
);

export default Contributors;
