/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/S10-9010132': { page: '/[schoolCode]' },
      '/S10-9010132/all': { page: '/[schoolCode]/all' },
      '/S10-9010132/1-1': { page: '/[schoolCode]/[classCode]' },
      '/S10-9010132/1-2': { page: '/[schoolCode]/[classCode]' },
      '/S10-9010132/2-1': { page: '/[schoolCode]/[classCode]' },
      '/S10-9010132/2-2': { page: '/[schoolCode]/[classCode]' },
      '/S10-9010132/3-1': { page: '/[schoolCode]/[classCode]' },
      '/S10-9010132/3-2': { page: '/[schoolCode]/[classCode]' },
    }
  },
}
