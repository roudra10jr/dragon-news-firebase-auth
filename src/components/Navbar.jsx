import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
const Navbar = () => {
	const { user, logOut } = use(AuthContext);

	// handle log out/sign out:
	const handleLogOut = () => {
		//console.log("user trying to logout");

		// sign out / log out:
		logOut()
			.then(() => {
				toast.success("Logout successfully done");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="flex justify-between items-center">
			<div className="">{user && user.email}</div>
			<div className="nav flex gap-5 text-accent">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/career">Career</NavLink>
			</div>
			<div className="login-btn flex gap-5">
				{user ? (
					<img
						className="w-12 rounded-full"
						src={user.photoURL}
						alt=""
					/>
				) : (
					<img src={userIcon} alt="" />
				)}
				{
					//
					user ? (
						<button
							onClick={handleLogOut}
							className="btn btn-primary px-10"
						>
							Logout
						</button>
					) : (
						<Link
							to="/auth/login"
							className="btn btn-primary px-10 "
						>
							Login
						</Link>
					)
				}
			</div>
		</div>
	);
};

export default Navbar;
