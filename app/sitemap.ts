export default function sitemap() {
   return [
     {
       url: 'https://www.reinhardtdev.com/',
       lastModified: new Date(),
       changeFrequency: 'yearly',
       priority: 1,
     },
     {
       url: 'https://www.reinhardtdev.com/skills',
       lastModified: new Date(),
       changeFrequency: 'monthly',
       priority: 0.8,
     },
     {
       url: 'https://www.reinhardtdev.com/projects',
       lastModified: new Date(),
       changeFrequency: 'weekly',
       priority: 0.5,
     },
     {
      url: 'htthttps://www.reinhardtdev.com/experience',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://www.reinhardtdev.com/contact',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
   ]
 }
