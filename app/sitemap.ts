export default function sitemap() {
   return [
     {
       url: 'https://reinhardtdev.com/',
       lastModified: new Date(),
       changeFrequency: 'yearly',
       priority: 1,
     },
     {
       url: 'https://reinhardtdev.com/about',
       lastModified: new Date(),
       changeFrequency: 'monthly',
       priority: 0.8,
     },
     {
       url: 'https://reinhardtdev.com/projects',
       lastModified: new Date(),
       changeFrequency: 'weekly',
       priority: 0.5,
     },
     {
      url: 'https://reinhardtdev.com/experience',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://reinhardtdev.com/contact',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
   ]
 }