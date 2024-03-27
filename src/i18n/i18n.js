
import { createI18n } from 'vue-i18n';
import { enUS, zhCN } from 'ant-design-vue/es/locale/index';
import en from './en';
import zh from './zh';
import {ref, computed} from 'vue'

const messages = {
  en: {
    ...en
  },

  zh: {
    ...zh
  }
};

const elementLocales = new Map();
elementLocales.set('en', enUS);
elementLocales.set('zh', zhCN);

export const availableLocales = {
  en: 'English',
  zh: '简体中文'
};


const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
});


export const currentLocale = computed(() => i18n.global.locale.value);


export const elementLocale = ref(elementLocales.get('en'));

// change lang
export function setLocale(locale) {
  i18n.global.locale = locale;
  elementLocale.value = elementLocales.get(locale);
}

setLocale('en')

export default i18n