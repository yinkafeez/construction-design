import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

// component file
import Container from "./components/Container.js"

// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

//stylesheet
import "./App.css"
import "./Contact.css"


ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Container />
        </BrowserRouter>
	</React.StrictMode >,

document.getElementById("root"))