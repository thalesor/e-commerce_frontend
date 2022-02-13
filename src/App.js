import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BookRegister from "././Pages/BookRegister/Index";
import Product from "././Pages/Product/Index";
import Store from "././Pages/Store/Index";
import Context from "./contexts/AppContext";
import Swal from "sweetalert2";
import PageCadastro from "./Pages/PageCadastro/index";
import PageLogin from "./Pages/PageLogin";
import PageCarrinho from "./Pages/PageCarrinho";
import { logout } from "./services/axios-service";

export default function App() {
	const persistedToken = JSON.parse(localStorage.getItem("token"));
	const [token, setToken] = useState(persistedToken);

	function manterLogin(novoToken) {
		setToken(novoToken);
		localStorage.setItem("token", JSON.stringify(novoToken));
	}

	async function deslogar() {
		try {
			const permit = await logout(token);
			localStorage.clear();
			window.location.replace('/login');
		}
		catch(error)
		{
			displayMessage("error", "Falha", "Houve um erro ao tentar deslogar");
		}
	}

	const [userData, setUserData] = useState(
		localStorage.getItem("userData")
			? JSON.parse(localStorage.getItem("userData"))
			: null
	);

	const [carrinho, setCarrinho] = useState(
		localStorage.getItem("carrinho")
			? JSON.parse(localStorage.getItem("carrinho"))
			: []
	);

	const message = Swal.mixin({
		buttonsStyling: true,
	});

	const Toast = Swal.mixin({
		toast: true,
		position: "top-end",
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener("mouseenter", Swal.stopTimer);
			toast.addEventListener("mouseleave", Swal.resumeTimer);
		},
	});

	const addCarrinho = (book) => {
		setCarrinho([...carrinho, book]);
		displayToast("success", ` ${book.title} foi adicionado ao carrinho 🚀`);
	};

	useEffect(() => {
		localStorage.setItem("carrinho", JSON.stringify(carrinho));
	}, [carrinho]);

	const displayToast = (type, title) => {
		Toast.fire({
			icon: type,
			title: title,
		});
	};

	const displayMessage = (
		type,
		title,
		text,
		fn = null,
		showCancelButton = false
	) => {
		message.fire({
			title: title,
			text: text,
			icon: type,
			showCancelButton: showCancelButton,
			confirmButtonText: "Ok",
			cancelButtonText: "Não",
			reverseButtons: true,
		});

		if (fn) {
			message.then((result) => {
				if (result.isConfirmed) {
					message.fire("Deleted!", "Your file has been deleted.", "success");
				} else if (result.dismiss === Swal.DismissReason.cancel) {
					message.fire("Cancelled", "Your imaginary file is safe :)", "error");
				}
			});
		}
	};

	return (
		<Context.Provider
			value={{
				userData,
				setUserData,
				displayMessage,
				displayToast,
				addCarrinho,
				setCarrinho,
				carrinho,
				token,
				manterLogin,
				deslogar,
			}}
		>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Store />} />
					<Route path="/produtos/:titulo_produto" element={<Product />} />
					<Route path="/cadastro" element={<PageCadastro />} />
					<Route path="/book-register" element={<BookRegister />} />
					<Route path="/carrinho" element={<PageCarrinho />} />
					<Route path="/login" element={<PageLogin />} />
					<Route path="/registrar-usuario" element={<PageCadastro />} />
				</Routes>
			</BrowserRouter>
		</Context.Provider>
	);
}
