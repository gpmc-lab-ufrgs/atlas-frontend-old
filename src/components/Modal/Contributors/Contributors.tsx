import { ModalContainer } from '@components/Modal';

import {mainContributors, otherContributors} from './contributors';

import * as Styles from './styles';

const Contributors = () => (
	<ModalContainer title="Contributors">
		{mainContributors.map((mainContributor, index) => (
				<div key={index}>
					<Styles.contributorImage
						src={mainContributor.image}
						alt={mainContributor.name}
					/>
					
					<Styles.personDatas>
						<Styles.personData>
							{mainContributor.name}
						</Styles.personData>

						<Styles.personData>
							<b>{mainContributor.function}</b>
						</Styles.personData>

						<Styles.personData>
							{mainContributor.institution}
						</Styles.personData>
					</Styles.personDatas>
				</div>
			)
		)}

		<br></br>
		<h2>Developers:</h2>
		<br></br>
		{otherContributors.map((otherContributor, index) =>
			(
				<>
					<div key={index}>
						{otherContributor.hasImage ? (
							<Styles.contributorImage
								src={otherContributor.image}
								alt={`Imagem de ${otherContributor.name}`}
							/>
						) : (
							<Styles.avatarIconDiv>
								<Styles.avatarIcon
									src={otherContributor.image}
									alt={otherContributor.name}
								/>
							</Styles.avatarIconDiv>
						)}

						<Styles.personDatas>
							<Styles.personData>
								{otherContributor.name}
							</Styles.personData>
							
							<Styles.personData>
								{otherContributor.institution}
							</Styles.personData>
						</Styles.personDatas>
					</div>
					{index == 1 && (
						<>
							<h2>Researchers:</h2>
							<br></br>
						</>
					)}
				</>
			)
		)}
	</ModalContainer>
)

export default Contributors;
