module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ?
    '/bodycalc/' :
    '/',
  outputDir: 'docs',
}