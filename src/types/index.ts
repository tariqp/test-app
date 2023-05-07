export interface IAppContext {
    script: string
    isEmail: boolean,
    isPhone: boolean,
    emailSelector: string,
    phoneSelector: string,
    setIsEmail: (value: boolean) => void;
    setIsPhone: (value: boolean) => void;
    setEmailSelector: (value: string) => void;
    setPhoneSelector: (value: string) => void;
    setScript: (value: string) => void;
}