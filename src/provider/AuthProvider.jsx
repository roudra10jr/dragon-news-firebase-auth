import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	//console.log(user, loading);

	// for sign up/register with email & password:
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// for sign out/ log out:
	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	// for sign in/Log in:
	const logIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// update user profile:
	const updateUser = (updatedData) => {
		return updateProfile(auth.currentUser, updatedData);
	};

	// set an observer to track with state change : login / logout/ refreshes the page.
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const authData = {
		user,
		setUser,
		createUser,
		logOut,
		logIn,
		loading,
		setLoading,
		updateUser,
	};
	return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
