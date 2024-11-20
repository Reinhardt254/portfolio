export default function robots() {
   return {
     rules: {
       userAgent: '*',
       allow: '/',
       disallow: '/dashboard', 
     },
     sitemap: 'https://reinhardtdev.com/sitemap.xml',
   }
 }
