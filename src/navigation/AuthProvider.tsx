import React, {createContext, useState, ReactNode} from 'react';
import auth from '@react-native-firebase/auth';

interface AuthContextType {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  signupError: any;
  setSignupError: React.Dispatch<React.SetStateAction<any>>;
  loginError: any;
  setLoginError: React.Dispatch<React.SetStateAction<any>>;
  login: (credentials: {email: string; password: string}) => Promise<void>;
  register: (credentials: {email: string; password: string}) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidEmail = (email: string) => {
  return emailRegex.test(email);
};

const handleAuthError = (
  e: any,
  setError: React.Dispatch<React.SetStateAction<any>>,
) => {
  console.log(e);
  if (e.message.includes('INVALID_LOGIN_CREDENTIALS')) {
    setError("Email and password don't match");
  } else if (e.message.includes('auth/invalid-email')) {
    setError('Invalid email address');
  } else if (e.message.includes('auth/email-already-in-use')) {
    setError('This email already exists');
  } else if (e.message.includes('auth/weak-password')) {
    setError('Password is too short');
  } else {
    setError('An error occurred');
    console.log(e);
  }
};

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<any>(null);
  const [loginError, setLoginError] = useState<any>(null);
  const [signupError, setSignupError] = useState<any>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loginError,
        setLoginError,
        signupError,
        setSignupError,
        login: async ({email, password}) => {
          if (!isValidEmail(email)) {
            setLoginError('Please enter a valid email address');
            return;
          }

          try {
            await auth().signInWithEmailAndPassword(email, password);
            console.log('email:', email);
          } catch (e: any) {
            handleAuthError(e, setLoginError);
          }
        },

        register: async ({email, password}) => {
          if (!isValidEmail(email)) {
            setSignupError('Please enter a valid email address');
            return;
          }

          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e: any) {
            handleAuthError(e, setSignupError);
          }
        },

        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
        resetPassword: async (email: string) => {
          if (!isValidEmail(email)) {
            setSignupError('Please enter a valid email address');
            return;
          }

          try {
            await auth().sendPasswordResetEmail(email);
          } catch (e) {
            handleAuthError(e, setSignupError);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
