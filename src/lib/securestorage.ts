import secureLocalStorage  from  'react-secure-storage';
import { decryptSessionData } from './cryptosession';
import type {UserResponseType, UserType, AuthorizationType} from './types';


export const getSecureStorage = (key: string, datatype: string='object') => {
    const secureStorage = secureLocalStorage.getItem(key);
    if (secureStorage){
        return secureStorage;
    }
    return decryptSessionData(key, datatype);
}    