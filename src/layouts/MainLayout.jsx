import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
	return (
		<div className="min-h-screen bg-gray-50 flex flex-col">
			<Navbar />
			<main className="flex-grow px-4 py-6">
				<Outlet />
			</main>
			<footer className="text-center text-sm text-gray-500 py-4">
				&copy; {new Date().getFullYear()} Weather App. All rights reserved.
			</footer>
		</div>
	);
};

export default MainLayout;
