
import React, { useState } from "react";
import Header from "components/header";
import Footer from "components/footer";
import About from "components/about";
import Projects from "components/projects";
import Contact from "components/contact";
import Resume from "components/resume";

function App() {
	const [currentTab, setCurrentTab] = useState("about");

	// This function checks to see which tab is selected and then generates the appropriate tab.
	const renderTab = () => {
		switch (currentTab) {
			case "about":
				return <About />;
			case "portfolio":
				return <Projects />;
			case "contact":
				return <Resume />;
			case "resume":
				return <Contact />;
			default:
				return null;
		}
	};

	return (
		<div>
			<div>
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;