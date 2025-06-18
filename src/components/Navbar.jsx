import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="flex justify-center gap-8 py-4 bg-blue-600 shadow-md">
			<NavLink
				to="/"
				className={({ isActive }) =>
					`text-white text-lg font-medium hover:underline ${
						isActive ? "underline font-bold" : ""
					}`
				}
			>
				Home
			</NavLink>
			<NavLink
				to="/forecast"
				className={({ isActive }) =>
					`text-white text-lg font-medium hover:underline ${
						isActive ? "underline font-bold" : ""
					}`
				}
			>
				Forecast
			</NavLink>
			<NavLink
				to="/highlights"
				className={({ isActive }) =>
					`text-white text-lg font-medium hover:underline ${
						isActive ? "underline font-bold" : ""
					}`
				}
			>
				Highlights
			</NavLink>
		</nav>
	);
};

export default Navbar;
