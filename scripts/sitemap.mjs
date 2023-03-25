import { generateSitemap } from 'pliny/utils/generate-sitemap.js'
import siteMetadata from '../data/siteMetadata.js'
import { allBlogs } from '../.contentlayer/generated/index.mjs'

const sitemap = () => {
  generateSitemap(siteMetadata.siteUrl, allBlogs)
  if (siteMetadata.siteUrl.includes('GPT-4')) {
    console.log('INCLUYE GPT-4 INCLUYE GPT-4 INCLUYE GPT-4 INCLUYE GPT-4 INCLUYE GPT-4 ')
    console.log(siteMetadata.siteUrl)
  }
  console.log('Sitemap generated...')
}
export default sitemap
