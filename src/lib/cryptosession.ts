import CryptoJS from 'crypto-js';
import { CRYPTO_SECRET_KEY } from '@/lib/envariables';

export const encryptSessionData = (key: string, data: object | string)=> {
    const dataStr = typeof data === 'string' ? data: JSON.stringify(data);
    const encrypted = CryptoJS.AES.encrypt(dataStr, CRYPTO_SECRET_KEY).toString();
    sessionStorage.setItem(key, encrypted);
}


export const decryptSessionData = (key: string, datatype: string='string') => {
    if (typeof window !== 'undefined') {
        const encrypted = sessionStorage.getItem(key);
        if (encrypted){
            const decrypted = CryptoJS.AES.decrypt(encrypted, CRYPTO_SECRET_KEY).toString(CryptoJS.enc.Utf8);
            if (datatype ==='object'){
                return JSON.parse(decrypted);
            }
            return decrypted;
        }
        return null;
    }    
    return null;
}
