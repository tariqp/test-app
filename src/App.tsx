import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Routes from './pages/routes';
import { Context, createContext, useMemo, useState } from 'react';
import { IAppContext } from './types';


const defaultAppContext = {
  formType: 'submit',
  script: '',
  isEmail: false,
  isPhone: false,
  emailSelector: '',
  phoneSelector: '',
  setFormType: (value: any) => { 
    return
  },
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
  const [phoneSelector, setPhoneSelector] = useState<string>('');
  const [formType, setFormType] = useState<any>('submit');


  const contextValue = useMemo(() => {
    return {
      formType, 
      setFormType,
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
  }, [formType, setFormType,isEmail, setIsEmail, isPhone, setIsPhone, script, setScript, emailSelector, setEmailSelector, phoneSelector, setPhoneSelector]);


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
