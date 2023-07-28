// PasswordContext.js
import { createContext, useState } from 'react';

const PasswordContext = createContext();

const PasswordProvider = ({ children }) => {
  const [passwords, setPasswords] = useState([]);

  return (
    <PasswordContext.Provider value={{ passwords, setPasswords }}>
      {children}
    </PasswordContext.Provider>
  );
};

export { PasswordContext, PasswordProvider };
