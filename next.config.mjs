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
   {
    source: "/api/create-checkout-session-for-monkey",
    headers: [
      { key: "Access-Control-Allow-Credentials", value: "true" },
      { key: "Access-Control-Allow-Origin", value: "*" },
      { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
      { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
    ],
   },
  ];
 },
};

export default nextConfig;
