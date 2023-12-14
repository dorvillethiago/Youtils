const path = require('path')
 
module.exports = {
  images: {
    domains: ['i.ytimg.com'],
  },
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}