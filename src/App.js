import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageCadastro from "./Pages/PageCadastro/cadastro-index";
// import SweetAlert from "react-bootstrap-sweetalert";
// import { AppContainer } from "../Pages/ShareComponents";
// import BookRegister from "../Pages/BookRegister/Index";

export default function App() {
	// const [userData, setUserData] = useState(
	// 	localStorage.getItem("userData")
	// 		? JSON.parse(localStorage.getItem("userData"))
	// 		: null
	// );
	// const [isVisibleMessage, setIsVisibleMessage] = useState(false);
	// const initialMessageState = {
	// 	showCancel: false,
	// 	message: "",
	// 	type: "error",
	// 	confirmBtnText: "",
	// 	cancelBtnText: "",
	// 	fn: null,
	// 	messageTitle: "",
	// };
	// const [messageData, setMessageData] = useState(initialMessageState);

	// const message = (message, type = "success", title = title, fn = null) => {
	// 	const messageConfig = {
	// 		message: message,
	// 		type: type,
	// 		confirmBtnText: "OK",
	// 		title: title,
	// 		fn: fn,
	// 	};
	// 	displayMessage(messageConfig);
	// };

	// const displayMessage = (messageConfig) => {
	// 	setMessageData(messageConfig);
	// 	setIsVisibleMessage(true);
	// };

	// const hideMessage = () => {
	// 	setIsVisibleMessage(false);
	// 	setMessageData(initialMessageState);
	// };

	/*
  async function logout(token)
  {
    try {
      await deleteSession(token);
      localStorage.clear();
      setUserData(null);
      window.location.replace("/");
    }
    catch(err)
    {
      message(err.response.data, 'error', 'Erro ao logar!');
    }
  }
  */

	return (
		// <AppContainer>
		// 	<UserContext.Provider
		// 		value={{
		// 			userData,
		// 			setUserData,
		// 			hideMessage,
		// 			displayMessage,
		// 			logout,
		// 			formatMoney,
		// 			message,
		// 		}}
		// 	>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PageCadastro />} />
				{/* <Route path="/book-register" element={<BookRegister />}></Route> */}
			</Routes>
			{/* {isVisibleMessage && (
						<SweetAlert
							type={messageData.type}
							showCancel={messageData.showCancel}
							confirmBtnText={
								messageData.confirmBtnText ? messageData.confirmBtnText : "Ok"
							}
							cancelBtnText={messageData.cancelBtnText}
							title={messageData.title}
							onConfirm={() => {
								if (messageData.fn) messageData.fn();
								else hideMessage();
							}}
							onCancel={() => hideMessage()}
						>
							{messageData.message}
						</SweetAlert>
					)}
				</BrowserRouter>
			</UserContext.Provider>
		</AppContainer> */}
		</BrowserRouter>
	);
}
