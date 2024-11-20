export default function robots() {
   return {
     rules: {
       userAgent: '*',
       allow: '/',
       disallow: '/dashboard', 
     },
     sitemap: 'https://paidonlinestudies.com/sitemap.xml',
   }
 }
