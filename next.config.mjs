/** @type {import('next').NextConfig} */
const nextConfig = {
  headers:async ()=>{
    return [
      {
        source:"/api/logout",
        headers:[
          {
            key:"cache-control",
            value: 'no-cache, no-store, must-revalidate',
          }
        ]

      }
    ]
  }
};

export default nextConfig;
