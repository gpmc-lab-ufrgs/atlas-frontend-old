import styled from 'styled-components';

export const ContributorContainer = styled.div`
	padding: 70px;
`;

export const contributorImage = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 10px;
`;

export const gridDisplay = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 35px 90px;
`;

export const avatarIconDiv = styled.div`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 200px;
	height: 200px;
	border-radius: 10px;
	border: 3px solid black;
	margin-bottom: 5px;
`;

export const avatarIcon = styled.img`
	width: 120px;
	height: 105px;
`;

export const modalRow = styled.div`
	display: flex;
	flex-direction: row;
`;

export const personDatas = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const personData = styled.p`
	margin-top: 0 !important;
	margin-bottom: 0 !important;
	font-size: 16px;
`;

export const contributorsFunctionDiv = styled.div`
	margin-top: 45px;
	margin-bottom: 35px;
	h2 {
		font-size: 20px;
	}
`;
