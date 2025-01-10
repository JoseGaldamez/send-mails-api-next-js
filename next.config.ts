import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    async headers() {
        return [
            {
                source: "/api/:path*",
                headers: [
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "*",
                    },
                    {
                        key: "Access-Control-Allow-Credentials",
                        value: "true",
                    },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET,HEAD,OPTIONS,POST,PUT",
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
