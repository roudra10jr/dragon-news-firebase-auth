import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import LoadingPage from "../pages/LoadingPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout></HomeLayout>,
		children: [
			{
				path: "",
				element: <Home></Home>,
			},
			{
				path: "/category/:id",
				element: <CategoryNews></CategoryNews>,
				loader: () => fetch("/news.json"),
				hydrateFallbackElement: <LoadingPage></LoadingPage>,
			},
		],
	},
	{
		path: "/auth",
		element: <AuthLayout></AuthLayout>,
		children: [
			{
				path: "/auth/login",
				Component: Login,
			},
			{
				path: "/auth/register",
				Component: Register,
			},
		],
	},
	{
		path: "/news-details/:id",
		element: (
			<PrivateRoute>
				<NewsDetails></NewsDetails>
			</PrivateRoute>
		),
		loader: () => fetch("/news.json"),
		hydrateFallbackElement: <LoadingPage></LoadingPage>,
	},
	{
		path: "/*",
		element: <h2>Error404</h2>,
	},
]);

export default router;
