import { Country } from "../Country/Country";

import "./Body.scss";

export const Body = ({ data, showDetailsInModalWindow, sort }) => {
	const counties = data.map((item, index) => (
		<div key={item.ID} onClick={() => showDetailsInModalWindow(item)} className="body__item">
			<Country index={index + 1} Country={item.Country} TotalConfirmed={item.TotalConfirmed} />
		</div>
	));

	return (
		<div>
			<div className="body__title">
				<div className="body__number">№</div>
				<div className="body__country" onClick={() => sort("Country")}>
					Country
				</div>
				<div className="body__total" onClick={() => sort("TotalConfirmed")}>
					Total Confirmed
				</div>
			</div>
			{data.length === 0 && <div>Loading...</div>}
			{counties}
		</div>
	);
};
