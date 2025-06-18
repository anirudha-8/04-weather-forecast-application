import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";
import Highlights from "./pages/Highlights";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/forecast", element: <Forecast /> },
			{ path: "/highlights", element: <Highlights /> },
		],
	},
]);

export default router;
