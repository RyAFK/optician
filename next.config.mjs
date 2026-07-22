/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Enables the SVG placeholder used for hero-practice.svg.
    // Safe here because it's a local, trusted asset in /public.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
  },
};

export default nextConfig;
