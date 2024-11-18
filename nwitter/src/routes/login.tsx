import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Error, Form, Input, Switcher, Title, Wrapper } from 'src/components/auth-components';
import GithubButton from 'src/components/github-btn';
import { auth } from 'src/firebase';

export default function CreateAccount() {
	const navigate = useNavigate();
	const [isLoading, setLoading] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: { name, value }
		} = e;
		if (name === 'password') {
			setPassword(value);
		} else if (name === 'email') {
			setEmail(value);
		}
	};
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError('');
		if (isLoading || email === '' || password === '') return;
		try {
			setLoading(true);
			await signInWithEmailAndPassword(auth, email, password);
			navigate('/');
		} catch (e) {
			if (e instanceof FirebaseError) {
				setError(e.message);
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<Wrapper>
			<Title>⭐ Log Into ⭐</Title>
			<Form onSubmit={onSubmit}>
				<Input onChange={onChange} name="email" value={email} placeholder="Email" type="email" required />
				<Input
					onChange={onChange}
					name="password"
					value={password}
					placeholder="Password"
					type="password"
					required
				/>
				<Input type="submit" value={isLoading ? 'Loading...' : 'Log In'} />
			</Form>
			{error !== '' ? <Error>{error}</Error> : null}
			<Switcher>
				Don't have an account?{''}
				<Link to="/create-account">Create one &rarr;</Link>
			</Switcher>
			<GithubButton />
		</Wrapper>
	);
}
