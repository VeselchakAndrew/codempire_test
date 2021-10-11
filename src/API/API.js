const url = "https://api.covid19api.com/summary";

export const getData = async () => {
	try {
		const data = await fetch(url);
		return await data.json();
	} catch (e) {
		console.error(e);
	}
};

getData();

