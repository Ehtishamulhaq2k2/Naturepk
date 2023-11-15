import React, {createContext, useState, ReactNode} from 'react';
import auth from '@react-native-firebase/auth';

interface AuthContextType {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  login: (credentials: {email: string; password: string}) => Promise<void>;
  register: (credentials: {email: string; password: string}) => Promise<void>;
  logout: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<any>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async ({email, password}) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
            console.log('email:', email);
          } catch (e) {
            console.log(e);
          }
        },
        register: async ({email, password}) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
