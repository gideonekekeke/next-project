import SharedProp from "../components/SharedProp";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<SharedProp>
			<Component {...pageProps} />
		</SharedProp>
	);
}

export default MyApp;
