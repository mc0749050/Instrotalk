import { createContext, useState, useEffect } from 'react';
export const DataApi = createContext();

export const DataApiProvider = ({ children }) => {
  // for change page 
  const [currentpage, setcurrentpage] = useState('Home');

  // for login 

  const [loginsystem, setloginsystem] = useState('loginpage');  
  const [loginstatus, setloginstatus] = useState(() => {
    return   localStorage.getItem('loginstatus') || 'dologin';
  });

  useEffect(() => {
    localStorage.setItem('loginstatus', loginstatus);
  }, [loginstatus]);
  
  // username local storage 
  const [username, setusername] = useState(() => {
    return localStorage.getItem('username') || '';
  });

  useEffect(() => {
    localStorage.setItem('username', username);
  }, [username]);

  // password local storage 
  const [password, setpassword] = useState(() => {
    return localStorage.getItem('password') || '';
  });

  useEffect(() => {
    localStorage.setItem('password', password);
  }, [password]);

    // name local storage 
  const [name, setname] = useState(() => {
    return localStorage.getItem('name') || 'Name';
  });

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

// profile image local storage 
  const [profileimg, setprofileimg] = useState(() => {
    return localStorage.getItem('profileimg') || "https://dpimages.org/wp-content/uploads/2023/12/no-dp32.jpg"
  })

  useEffect(() => {
  localStorage.setItem('profileimg', profileimg);
  }, [profileimg])




// post cart 
  const [postcart, setpostcart] = useState(() => {
    const savedCart = localStorage.getItem('postcart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('postcart', JSON.stringify(postcart));
  }, [postcart]);

  
  return (
    <DataApi.Provider value={{ currentpage, setcurrentpage, loginsystem, setloginsystem, username, setusername, password, setpassword, loginstatus, setloginstatus, name, setname, profileimg, setprofileimg, postcart, setpostcart}}>
      {children}
    </DataApi.Provider>
  );
}