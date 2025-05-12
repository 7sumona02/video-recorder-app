// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.imgur.com", // For your sample images
      "images.unsplash.com", // For Unsplash images
      "randomuser.me",
      "i.pinimg.com", // For avatar images
      // Add any other domains you use for images
    ],
  },
  // ... other configurations
};

module.exports = nextConfig;
