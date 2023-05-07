import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Routes from './pages/routes';
import { Context, createContext, useMemo, useState } from 'react';
import { IAppContext } from './types';


const defaultAppContext = {
  script: '',
  isEmail: false,
  isPhone: false,
  emailSelector: '',
  phoneSelector: '',
  setIsEmail: (value: boolean) => {
    return;
  },
  setIsPhone: (value: boolean) => {
    return;
  },
  setEmailSelector: (value: string) => {
    return;
  },
  setPhoneSelector: (value: string) => {
    return;
  },
  setScript: (value: string) => {
    return;
  }
}

export const AppContext: Context<IAppContext> = createContext(
  defaultAppContext
)


function App() {
  const [isEmail, setIsEmail] = useState<boolean>(false)
  const [isPhone, setIsPhone] = useState<boolean>(false)
  const [script, setScript] = useState<string>('');
  const [emailSelector, setEmailSelector] = useState<string>('');
  const [phoneSelector, setPhoneSelector] = useState<string>('asdasdasdas');


  const contextValue = useMemo(() => {
    return {
      isEmail,
      setIsEmail,
      isPhone,
      setIsPhone,
      script,
      setScript,
      emailSelector,
      setEmailSelector,
      phoneSelector,
      setPhoneSelector
    }
  }, [isEmail, setIsEmail, isPhone, setIsPhone, script, setScript, emailSelector, setEmailSelector, phoneSelector, setPhoneSelector]);


  return (
    <div className='root'>
      <AppContext.Provider value={contextValue}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
