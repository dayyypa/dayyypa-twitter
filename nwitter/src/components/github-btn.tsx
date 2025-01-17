import { GithubAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from 'src/firebase';
import styled from 'styled-components';

const Button = styled.span`
	margin-top: 50px;
	background-color: white;
	font-weight: 500;
	width: 100%;
	color: black;
	padding: 10px 20px;
	border-radius: 50px;
	border: 0;
	display: flex;
	gap: 5px;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
`;

const Logo = styled.img`
	height: 25px;
`;

export default function GithubButton() {
	const navigate = useNavigate();
	const onClick = async () => {
		try {
			const provider = new GithubAuthProvider();
			await signInWithPopup(auth, provider);
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Button onClick={onClick}>
			<Logo src="/github-logo.svg" alt="Github Logo" />
			Continue with Github
		</Button>
	);
}
