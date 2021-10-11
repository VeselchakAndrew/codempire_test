import { Finder } from "../Finder/Finder";

import "./Header.scss";
import logo from "../../img/logo.png";

export const Header = ({ search }) => {
	return (
		<div className="header">
			<div className="header__logo">
				<img src={logo} alt="Logo" />
				<h3 className="header__logo_text">STATISTIC</h3>
			</div>
			<Finder search={search} />
		</div>
	);
};
