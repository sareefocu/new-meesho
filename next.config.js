module.exports = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                // Apply caching strategies to static assets for better performance
                source: '/(.*).(js|css|woff|woff2)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};
