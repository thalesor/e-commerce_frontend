import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContainer } from '././Pages/ShareComponents';
import BookRegister from '././Pages/BookRegister/Index';
import Context from "./contexts/AppContext";
import Swal from 'sweetalert2';

function App() {
  
  const [userData, setUserData] = useState(localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null);


  const message = Swal.mixin({
    buttonsStyling: true
  });

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

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
 
  /*
  const hideMessage = () => 
  {
    setIsVisibleMessage(false);
    setMessageData(initialMessageState);
  }

  
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
    <AppContainer>
      <Context.Provider value={{userData, setUserData, displayMessage, displayToast}}>
    <BrowserRouter>
      <Routes>
      <Route path="/book-register" element={
      <BookRegister />
      }></Route> 
      </Routes>
    </BrowserRouter>
    </Context.Provider>
    </AppContainer>
  );
}

export default App;