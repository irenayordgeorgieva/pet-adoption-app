// Import * as config from 'next/config'
import NextI18Next from 'next-i18next'
import path from 'path'


const i18next = new NextI18Next({
  browserLanguageDetection: true,
  defaultLanguage: 'bg',
  defaultNS: 'common',
  localePath: path.resolve('./public/static/locales'),
  // LocaleSubpaths: config.default().publicRuntimeConfig.localeSubpaths,
  otherLanguages: ['en'],
})

export const {
  withTranslation, Link, Router, Trans, appWithTranslation,
  config, i18n, initPromise, useTranslation,
} = i18next
