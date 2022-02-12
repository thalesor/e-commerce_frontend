import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookRegister from '././Pages/BookRegister/Index';
import Product from '././Pages/Product/Index';
import Store from '././Pages/Store/Index';
import Context from "./contexts/AppContext";
import Swal from "sweetalert2";
import PageCadastro from "./Pages/PageCadastro/index";
import PageLogin from "./Pages/PageLogin";
import PageCarrinho from "./Pages/PageCarrinho";

export default function App() {
	const [userData, setUserData] = useState(localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null);
  const [carrinho, setCarrinho] = useState([]);

  const message = Swal.mixin({
    buttonsStyling: true
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

  const addCarrinho = (book) =>
  {
    setCarrinho([...carrinho, book]);
    displayToast('success', ` ${book.title} foi adicionado ao carrinho 🚀`);
    ;
  }

  useEffect(() => {
    console.log(carrinho);
  }, [carrinho]);

  const displayToast = (type, title) =>
  {
    Toast.fire({
      icon: type,
      title: title
    })
  }
   
  const displayMessage = (type, title, text, fn=null, showCancelButton=false) =>
  {
   message.fire({
      title: title,
      text: text,
      icon: type,
      showCancelButton: showCancelButton,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Não',
      reverseButtons: true
    });
    
    if(fn)
    {
      message.then((result) => {
        if (result.isConfirmed) {
          message.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel ) {
          message.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      });
    }
   
  }

		return (
			  <Context.Provider value={{userData, setUserData, displayMessage, displayToast, addCarrinho, carrinho}}>
			<BrowserRouter>
			  <Routes>
			  <Route path="/" element={<Store />} />
			  <Route path="/produtos/:titulo_produto" element={<Product />} />
			  <Route path="/cadastro" element={<PageCadastro />} />
			  <Route path="/book-register" element={ <BookRegister /> }></Route> 
			  <Route path="/book-register" element={<BookRegister />} />
			  <Route path="/carrinho" element={<PageCarrinho />} />
        <Route path="/login" element={<PageLogin />} />
			  </Routes>
			</BrowserRouter>
		</Context.Provider>
	);
}
