import Head from "next/head";
import HeaderView from "./HeaderView";

const SharedProp = ({ children }) => {
	return (
		<div>
			<Head>
				<title>next app</title>
				<meta name='description' content='steps to next js' />
				<link rel='icon' href='assets/img.jpg' />
			</Head>
			<HeaderView />
			{children}
		</div>
	);
};

export default SharedProp;
