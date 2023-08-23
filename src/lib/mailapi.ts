import nodemailer from 'nodemailer';
import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

interface MailTransportType {
     host: string;
     secureConnection: boolean;
     port: number;
     tls: {
        ciphers: string;
     }
     auth: {
        user: string;
        pass: string;
     }
}

//Outlook
export const outlookTransporter = nodemailer.createTransport({
    host: serverRuntimeConfig.SENDER_MAIL_HOST, // hostname
    secureConnection: serverRuntimeConfig.SECURE_CONNECTION, // TLS requires secureConnection to be false
    port: serverRuntimeConfig.SENDER_MAIL_PORT, // port for secure SMTP
    tls: {
        ciphers:serverRuntimeConfig.TLS_CIPHERS
    },
    auth: {
        user: serverRuntimeConfig.SENDER_MAIL_USER,
        pass: serverRuntimeConfig.SENDER_USER_PASSWORD
    }
} as MailTransportType);