import NextI18Next from 'next-i18next'
import path from 'path'


const i18next = new NextI18Next({
  defaultLanguage: 'bg',
  defaultNS: 'common',
  localePath: path.resolve('./public/static/locales'),
  otherLanguages: ['en'],
})

export const {
  withTranslation, Link, Router, Trans, appWithTranslation,
  config, i18n, initPromise, useTranslation,
} = i18next
