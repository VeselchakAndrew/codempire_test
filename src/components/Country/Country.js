export const Country = ({ index, Country, TotalConfirmed }) => {
	return (
		<>
			<div className="body__number">{index}</div>
			<div className="body__country">{Country}</div>
			<div className="body__total">{TotalConfirmed}</div>
		</>
	);
};
