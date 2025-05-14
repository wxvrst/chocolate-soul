import AppRoutes from "./routes/routes";
import './App.css'
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
//TODO: Change theme button, hover on header links and other links
const App: React.FC = () => {

	// const location = useLocation();

	// const getSelectedKey = () => {
	// 	switch (location.pathname) {
	// 		case "/": return ["1"];
	// 		default: return [""];
	// 	}
	// }
	return (
		<div
			className='bg-cover bg-[url(/images/bg-image.jpg)] bg-fixed top bg-center h-full bg-no-repeat	'
		>
			<Header />
			<AppRoutes />
			<Footer/>
		</div>
	);
}

export default App;