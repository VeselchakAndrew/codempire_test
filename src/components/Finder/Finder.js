import "./Finder.scss";
export const Finder = ({ search }) => {
	return (
		<div className="form_div">
			<form action="" className="search_icon">
				<input className="search-bar" id="search-bar" type="text" placeholder="Search..." onChange={(e) => search(e)} />
			</form>
		</div>
	);
};
