import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Bắt tất cả các đường dẫn, ngoại trừ các file tĩnh và API
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
