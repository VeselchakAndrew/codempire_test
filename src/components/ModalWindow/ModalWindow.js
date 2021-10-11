import "./ModalWindow.scss";

export const ModalWindow = ({ modalWindowInfo, close }) => {
	const { Country, TotalConfirmed, TotalDeaths, TotalRecovered } =
		modalWindowInfo;
	return (
		<div className="modal-overlay">
			<div className="modal">
				<div className="modal__title">{Country}</div>
				<div className="modal__info">
					<p className="total_confirmed_icon">Total Confirmed:</p>
					<p>{TotalConfirmed}</p>
				</div>
				<div className="modal__info">
					<p className="total_death_icon">Total Deaths:</p>
					<p>{TotalDeaths}</p>
				</div>
				<div className="modal__info">
					<p className="total_recovered_icon">Total Recovered:</p>
					<p>{TotalRecovered}</p>
				</div>
				<button className="modal__button" onClick={() => close()}>
					OK
				</button>
			</div>
		</div>
	);
};
