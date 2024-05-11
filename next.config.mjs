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
  ];
 },
};

export default nextConfig;
