import { useEffect, useState } from "react";
import { getData } from "./API/API";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { ModalWindow } from "./components/ModalWindow/ModalWindow";

import "normalize.css";
import "./App.scss";

function App() {
	const [data, setData] = useState([]);
	const [foundData, setFoundData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [modalWindowInfo, setModalWindowInfo] = useState(null);
	const [modalWindowIsOpen, setModalWindowIsOpen] = useState(false);
	// const [sortedData, setSortedData] = useState([]);
	// const [sortedCriteria, setSortedCriteria] = useState("");

	// let count = 0;

	useEffect(() => {
		getData().then((res) => setData(res.Countries));
	}, []);

	useEffect(() => {
		const found = data.filter((item) => item.Country.toLowerCase().includes(searchTerm));
		setFoundData(found);
	}, [searchTerm, data]);

	// useEffect(() => {
	// 	let sorted = [];
	// 	if (count % 2 === 0) {
	// 		sorted = data.sort((a, b) => (a[sortedCriteria] > b[sortedCriteria] ? 1 : b[sortedCriteria] > a[sortedCriteria] ? -1 : 0));
	// 	} else {
	// 		sorted = data.sort((a, b) => (a[sortedCriteria] > b[sortedCriteria] ? -1 : b[sortedCriteria] > a[sortedCriteria] ? 1 : 0));
	// 	}
	// 	setSortedData(sorted);
	// }, [sortedCriteria, count, data]);

	const search = (event) => {
		event.preventDefault();
		return setSearchTerm(event.target.value);
	};

	const showDetailsInModalWindow = (item) => {
		setModalWindowInfo(item);
		setModalWindowIsOpen(true);
		document.body.classList.add("modal-open");
	};

	const close = () => {
		setModalWindowInfo(null);
		setModalWindowIsOpen(false);
		document.body.classList.remove("modal-open");
	};

	// const sort = (field) => {
	// 	setSortedCriteria(field);
	// 	count++;
	// 	console.log(count);
	// };

	return (
		<div className="wrapper">
			<Header search={search} />

			{foundData.length !== 0 ? (
				<Body data={foundData} showDetailsInModalWindow={showDetailsInModalWindow} />
			) : foundData.length === 0 ? (
				<h1> No Result </h1>
			) : (
				<Body data={data} showDetailsInModalWindow={showDetailsInModalWindow} />
			)}
			{modalWindowIsOpen && <ModalWindow modalWindowInfo={modalWindowInfo} close={close} />}
		</div>
	);
}

export default App;
