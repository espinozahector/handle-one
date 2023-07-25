/** @type {import('next').NextConfig} */
module.exports = {
<<<<<<< HEAD
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/Nutlope/twitterbio",
        permanent: false,
      },
      {
        source: "/deploy",
        destination: "https://vercel.com/templates/next.js/twitter-bio",
        permanent: false,
      },
    ];
=======
  async redirects() {
    return [];
>>>>>>> c64cc8c073a1462ed451f0069dbd283c42692587
  },
};
