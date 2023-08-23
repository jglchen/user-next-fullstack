import { ResetPasswordHTMLType, VerifyEmailHTMLType } from '@/lib/types';

export function passwdResetHTML({host, email, token}: ResetPasswordHTMLType): string{
   const htmlStr =  
   `
   <html>
   <body style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';">
   <div style="color: #111827; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
   <div>
   <a href="${host}/">
   <svg height="508" xmlns="http://www.w3.org/2000/svg" width="2500" viewBox="0 0 394.00000000000006 79.433" style="width: 5rem;height: 5rem;fill: currentColor;color: #6B7280;">
   <path d="M261.919.033h68.628V12.7h-27.224v66.639H289.71V12.7h-27.791V.033zM149.052.033V12.7h-55.01v20.377h44.239v12.667H94.042v20.928h55.01V79.34H80.43V12.7h-.006V.033h68.628zM183.32.066h-17.814l63.806 79.306h17.866l-31.907-39.626L247.127.126l-17.815.028-22.96 28.516L183.32.066zM201.6 56.715l-8.921-11.092-27.224 33.81h17.865l18.28-22.718z" fill="var(--geist-foreground)"/><path clip-rule="evenodd" d="M80.907 79.339L17.015 0H0v79.306h13.612V16.952l50.195 62.387h17.1z" fill="var(--geist-foreground)" fill-rule="evenodd"/><path d="M333.607 78.855a3.528 3.528 0 0 1-2.555-1.036c-.71-.691-1.061-1.527-1.052-2.518-.009-.963.342-1.79 1.052-2.481a3.528 3.528 0 0 1 2.555-1.036c.959 0 1.798.345 2.508 1.036.72.69 1.079 1.518 1.089 2.481a3.44 3.44 0 0 1-.508 1.79 3.675 3.675 0 0 1-1.319 1.282 3.403 3.403 0 0 1-1.77.482zM356.84 45.445h6.032v23.24c-.009 2.135-.471 3.962-1.374 5.498-.913 1.536-2.177 2.708-3.8 3.535-1.614.818-3.505 1.237-5.654 1.237-1.965 0-3.726-.355-5.294-1.046-1.568-.69-2.813-1.726-3.726-3.09-.923-1.363-1.375-3.063-1.375-5.098h6.042c.009.89.212 1.663.599 2.308a3.855 3.855 0 0 0 1.605 1.481c.691.346 1.485.519 2.379.519.969 0 1.799-.2 2.472-.61.673-.4 1.19-1 1.55-1.799.35-.79.535-1.772.544-2.935v-23.24zM387.691 54.534c-.147-1.409-.793-2.509-1.918-3.29-1.135-.79-2.601-1.182-4.4-1.182-1.263 0-2.351.191-3.255.564-.904.382-1.605.89-2.085 1.536-.479.645-.719 1.381-.738 2.208 0 .691.166 1.29.489 1.79.323.51.756.937 1.319 1.282a8.806 8.806 0 0 0 1.845.882c.682.236 1.365.436 2.047.6l3.145.772a21.74 21.74 0 0 1 3.662 1.182 12.966 12.966 0 0 1 3.163 1.872 8.384 8.384 0 0 1 2.214 2.726c.544 1.064.821 2.309.821 3.745 0 1.936-.498 3.635-1.504 5.108-1.005 1.463-2.453 2.608-4.353 3.435-1.891.818-4.178 1.236-6.871 1.236-2.601 0-4.87-.4-6.779-1.2-1.918-.79-3.413-1.954-4.492-3.48-1.079-1.527-1.66-3.39-1.743-5.58h5.977c.083 1.144.452 2.099 1.079 2.871.636.763 1.466 1.327 2.481 1.709 1.024.372 2.167.563 3.431.563 1.319 0 2.481-.2 3.486-.59.996-.391 1.78-.937 2.343-1.646.572-.7.858-1.526.867-2.472-.009-.863-.268-1.581-.766-2.145-.507-.563-1.208-1.036-2.103-1.417a21.606 21.606 0 0 0-3.154-1.027l-3.818-.964c-2.758-.7-4.944-1.763-6.54-3.19-1.604-1.427-2.398-3.317-2.398-5.69 0-1.944.535-3.653 1.615-5.116 1.069-1.463 2.536-2.6 4.39-3.408 1.863-.818 3.966-1.218 6.308-1.218 2.38 0 4.464.4 6.263 1.218 1.798.809 3.21 1.936 4.233 3.372 1.024 1.436 1.559 3.08 1.587 4.944h-5.848z" fill="var(--geist-foreground)"/>
   </svg>
   </a>
   </div>
   <div style="width: 100%; @media (min-width: 640px) { max-width: 36rem; border-radius: 0.5rem;} margin-top: 1.5rem;padding-left: 1.5rem;padding-right: 1.5rem;padding-left: 1rem;padding-right: 1rem;background-color: #ffffff;box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);overflow: hidden;">
   <div style="margin-bottom: 1rem;font-weight: 700;font-size: 1.25rem;line-height: 1.75rem;color: #4B5563;">
   Hello,
   </div>
   <div style="margin-bottom: 1rem;font-size: 1rem;line-height: 1.5rem;color: #4B5563;">
   You are receiving this email because we received a password reset request for your account.
   </div>

   <form action='${host}/password-reset/${token}' method='get'>
   <input
       id="email"
       type="hidden"
       name="email"
       value="${email}"
       readOnly
       />
   <div style="display: flex;width: 100%;align-items: center;justify-content: center;margin-top: 1rem;">
       <button
         type='submit'
         style="display: inline-flex;align-items: center;padding-left: 1rem;padding-right: 1rem;padding-top: 0.5rem;padding-bottom: 0.5rem;background-color: #1F2937;border-width: 1px;border-color: transparent;border-radius: 0.375rem;font-weight: 600;font-size: 0.75rem;line-height: 1rem;color: #ffffff;text-transform: uppercase;letter-spacing: 0.1em;--ring-color: #D1D5DB;"
       >Reset Password</button>
   </div>
   </form>
   <div style="margin-top: 1rem;margin-bottom: 1rem;font-size: 1rem;line-height: 1.5rem;color: #4B5563;">
   This password reset link will expire in 60 minutes.
   <br/>
   If you did not request a password reset, no further action is required.
   <br /><br />
   Regards.
   <br/>
   Next.js User Managenent Team
   </div>
   <div>
   <hr />
   </div>
   <div style="margin-top: 1rem;margin-bottom: 1rem;font-size: 1rem;line-height: 1.5rem;color: #4B5563;overflow-wrap: break-word;">
   If you are having trouble clicking the &quot;Reset Password&ldquo; button, copy and paste the URL below into your web browser: <a style="color: #2563EB;text-decoration: underline;" href='${host}/password-reset/${token}?email=${email}'>${host}/password-reset/${token}?email=${email}</a>
   </div>
   </div>
   </div>
   </body>
   </html>
  `;

   return htmlStr;
}


export function emailVerifyHTML({host, id, hash, signature, expires}: VerifyEmailHTMLType): string{
   const htmlStr =  
   `
   <html>
   <body style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';">
   <div style="color: #111827; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
   <div>
   <a href="${host}/">
   <svg height="508" xmlns="http://www.w3.org/2000/svg" width="2500" viewBox="0 0 394.00000000000006 79.433" style="width: 5rem;height: 5rem;fill: currentColor;color: #6B7280;">
   <path d="M261.919.033h68.628V12.7h-27.224v66.639H289.71V12.7h-27.791V.033zM149.052.033V12.7h-55.01v20.377h44.239v12.667H94.042v20.928h55.01V79.34H80.43V12.7h-.006V.033h68.628zM183.32.066h-17.814l63.806 79.306h17.866l-31.907-39.626L247.127.126l-17.815.028-22.96 28.516L183.32.066zM201.6 56.715l-8.921-11.092-27.224 33.81h17.865l18.28-22.718z" fill="var(--geist-foreground)"/><path clip-rule="evenodd" d="M80.907 79.339L17.015 0H0v79.306h13.612V16.952l50.195 62.387h17.1z" fill="var(--geist-foreground)" fill-rule="evenodd"/><path d="M333.607 78.855a3.528 3.528 0 0 1-2.555-1.036c-.71-.691-1.061-1.527-1.052-2.518-.009-.963.342-1.79 1.052-2.481a3.528 3.528 0 0 1 2.555-1.036c.959 0 1.798.345 2.508 1.036.72.69 1.079 1.518 1.089 2.481a3.44 3.44 0 0 1-.508 1.79 3.675 3.675 0 0 1-1.319 1.282 3.403 3.403 0 0 1-1.77.482zM356.84 45.445h6.032v23.24c-.009 2.135-.471 3.962-1.374 5.498-.913 1.536-2.177 2.708-3.8 3.535-1.614.818-3.505 1.237-5.654 1.237-1.965 0-3.726-.355-5.294-1.046-1.568-.69-2.813-1.726-3.726-3.09-.923-1.363-1.375-3.063-1.375-5.098h6.042c.009.89.212 1.663.599 2.308a3.855 3.855 0 0 0 1.605 1.481c.691.346 1.485.519 2.379.519.969 0 1.799-.2 2.472-.61.673-.4 1.19-1 1.55-1.799.35-.79.535-1.772.544-2.935v-23.24zM387.691 54.534c-.147-1.409-.793-2.509-1.918-3.29-1.135-.79-2.601-1.182-4.4-1.182-1.263 0-2.351.191-3.255.564-.904.382-1.605.89-2.085 1.536-.479.645-.719 1.381-.738 2.208 0 .691.166 1.29.489 1.79.323.51.756.937 1.319 1.282a8.806 8.806 0 0 0 1.845.882c.682.236 1.365.436 2.047.6l3.145.772a21.74 21.74 0 0 1 3.662 1.182 12.966 12.966 0 0 1 3.163 1.872 8.384 8.384 0 0 1 2.214 2.726c.544 1.064.821 2.309.821 3.745 0 1.936-.498 3.635-1.504 5.108-1.005 1.463-2.453 2.608-4.353 3.435-1.891.818-4.178 1.236-6.871 1.236-2.601 0-4.87-.4-6.779-1.2-1.918-.79-3.413-1.954-4.492-3.48-1.079-1.527-1.66-3.39-1.743-5.58h5.977c.083 1.144.452 2.099 1.079 2.871.636.763 1.466 1.327 2.481 1.709 1.024.372 2.167.563 3.431.563 1.319 0 2.481-.2 3.486-.59.996-.391 1.78-.937 2.343-1.646.572-.7.858-1.526.867-2.472-.009-.863-.268-1.581-.766-2.145-.507-.563-1.208-1.036-2.103-1.417a21.606 21.606 0 0 0-3.154-1.027l-3.818-.964c-2.758-.7-4.944-1.763-6.54-3.19-1.604-1.427-2.398-3.317-2.398-5.69 0-1.944.535-3.653 1.615-5.116 1.069-1.463 2.536-2.6 4.39-3.408 1.863-.818 3.966-1.218 6.308-1.218 2.38 0 4.464.4 6.263 1.218 1.798.809 3.21 1.936 4.233 3.372 1.024 1.436 1.559 3.08 1.587 4.944h-5.848z" fill="var(--geist-foreground)"/>
   </svg>
   </a>
   </div>
   <div style="width: 100%; @media (min-width: 640px) { max-width: 36rem; border-radius: 0.5rem;} margin-top: 1.5rem;padding-left: 1.5rem;padding-right: 1.5rem;padding-left: 1rem;padding-right: 1rem;background-color: #ffffff;box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);overflow: hidden;">
   <div style="margin-bottom: 1rem;font-weight: 700;font-size: 1.25rem;line-height: 1.75rem;color: #4B5563;">
   Hello,
   </div>
   <div style="margin-bottom: 1rem;font-size: 1rem;line-height: 1.5rem;color: #4B5563;">
   Please click the button below to verify your email address.
   </div>

   <form action='${host}/verify-email/${id}/${hash}' method='get'>
   <input
       id="expires"
       type="hidden"
       name="expires"
       value="${expires}"
       readOnly
       />

   <input
       id="signature"
       type="hidden"
       name="signature"
       value="${signature}"
       readOnly
       />
   <div style="display: flex;width: 100%;align-items: center;justify-content: center;margin-top: 1rem;">
       <button
         type='submit'
         style="display: inline-flex;align-items: center;padding-left: 1rem;padding-right: 1rem;padding-top: 0.5rem;padding-bottom: 0.5rem;background-color: #1F2937;border-width: 1px;border-color: transparent;border-radius: 0.375rem;font-weight: 600;font-size: 0.75rem;line-height: 1rem;color: #ffffff;text-transform: uppercase;letter-spacing: 0.1em;--ring-color: #D1D5DB;"
       >Verify Email Address</button>
   </div>
   </form>
   <div style="margin-top: 1rem;margin-bottom: 1rem;font-size: 1rem;line-height: 1.5rem;color: #4B5563;">
   This email verification link will expire in 24 hours.
   <br/>
   If you did not create an account, no further action is required.
   <br /><br />
   Regards.
   <br/>
   Next.js User Managenent Team
   </div>
   <div>
   <hr />
   </div>
   <div style="margin-top: 1rem;margin-bottom: 1rem;font-size: 1rem;line-height: 1.5rem;color: #4B5563;overflow-wrap: break-word;">
   If you are having trouble clicking the &quot;Reset Password&ldquo; button, copy and paste the URL below into your web browser: <a style="color: #2563EB;text-decoration: underline;" href='${host}/verify-email/${id}/${hash}?expires=${expires}&signature=${signature}'>${host}/verify-email/${id}/${hash}?expires=${expires}&signature=${signature}</a>
   </div>
   </div>
   </div>
   </body>
   </html>
   `;

   return htmlStr;
}
