import Link from "next/link";
import React from "react";
import styled from "styled-components";

const HeaderView = () => {
	return (
		<Container>
			<Logo />
			<Content>
				<Link href='/'>
					<a>
						{" "}
						<h4>Home</h4>
					</a>
				</Link>
				<Link href='/about'>
					<a>
						{" "}
						<h4>About</h4>
					</a>
				</Link>

				<Link href='/services'>
					<a>
						<h4>services</h4>
					</a>
				</Link>
			</Content>
			<UserImage />
		</Container>
	);
};

export default HeaderView;

const Content = styled.div`
	/* margin-left: 50px; */
	display: flex;
	justify-content: space-around;
	align-items: center;

	flex: 1;
`;

const Container = styled.div`
	height: 70px;
	background-color: #5a228b;
	color: white;
	display: flex;
	align-items: center;
	width: 100%;
	position: fixed;
`;
const UserImage = styled.div`
	height: 40px;
	width: 40px;
	background-color: silver;
	/* margin-left: 20px; */
	border-radius: 50%;
	margin-right: 20px;
`;
const Logo = styled.div`
	height: 40px;
	width: 100px;
	background-color: silver;
	margin-left: 20px;
`;
