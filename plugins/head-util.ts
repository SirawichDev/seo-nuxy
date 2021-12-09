import { Plugin, Context } from '@nuxt/types'

const seoInject: Plugin = (_: Context, inject) => {
  return inject('headUtil', (data: any) => ({
    htmlAttrs: {
      lang: data.lang
    },
    title: data.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: data.description || 'เดสซาคริปชั่น'
      },
      {
        name: 'keywords',
        content: ['xxx', 'xxx2']
      },
      {
        property: 'og:title',
        name: `og:title`,
        content: data.title || 'ไตเติ้ลลลล'
      },
      {
        property: 'og:description',
        name: 'og:description',
        content: data.description || 'og เดสซาคริปชั่น'
      },
      { property: 'og:url', name: 'og:url', content: 'www.xxx.com' },
      { property: 'og:site_name', name: 'og:site_name', content: 'XXXX'},
      {
        property: 'og:image',
        name: 'og:image',
        content: data.image || '/images/Yoda_Promo3.jpeg'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: data.urlPath ? data.urlPath: ''
      }
    ]
  }))
}

export default seoInject
