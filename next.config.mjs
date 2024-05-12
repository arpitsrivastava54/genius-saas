import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  remotePatterns: [
   {
    protocol: "https",
    hostname: "*",
   },
  ],
 },

 headers: async () => {
  return [
   {
    source: "/api/logout",
    headers: [
     {
      key: "cache-control",
      value: "no-cache, no-store, must-revalidate",
     },
    ],
   },
   {
    source: "/api/free-trial-count",
    headers: [
     {
      key: "cache-control",
      value: "no-cache, no-store, must-revalidate",
     },
    ],
   },
  //  {
  //   source: "/",
  //   headers: [
  //    {
  //     key: "Content-Security-Policy",
  //     value:
  //      "default-src 'self'; script-src 'self' https://example.com; style-src 'self' https://example.com; img-src 'self' https://example.com; font-src 'self' https://example.com; object-src 'none'; frame-ancestors 'none';",
  //    },
  //   ],
  //  },
  ];
 },
};

export default nextConfig;
