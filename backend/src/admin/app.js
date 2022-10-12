import AuthLogo from './extensions/logo.png';
import MenuLogo from './extensions/logo.png';
import favicon  from './extensions/favicon.png';

const config = {
  /** Add a new locale, other than 'en' */
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  /** Replace the Strapi logo in auth (login) views */
  auth: {
    logo: AuthLogo,
  },
  /** Replace the Strapi logo in the main navigation */
  menu: {
    logo: MenuLogo,
  },
  /** replace favicon with a custom icon */
  head: {
    favicon: favicon,
  },
  /** Override or extend the theme */
  // theme: {
  //   colors: {
  //     primary100: '#f6ecfc',
  //     primary200: '#e0c1f4',
  //     primary500: '#ac73e6',
  //     primary600: '#9736e8',
  //     primary700: '#8312d1',
  //     danger700: '#b72b1a'
  //   },
  // },
  /** Extend the translations */
  translations: {
    vi: {
      'app.components.LeftMenu.navbrand.title': 'CMS Dashboard',
      'app.components.LeftMenu.navbrand.workplace': 'Quản Trị',
      'Auth.form.email.label': 'Email',
      Users: 'Người Dùng',
      City: 'Thành Phố',
      /** Customize the label of the Content Manager table. */
      Id: 'ID VN',
    },
    en: {
      'app.components.LeftMenu.navbrand.title': 'CMS Dashboard',
      'app.components.LeftMenu.navbrand.workplace': 'Admin Panel',
    }
  },
  /** Disable video tutorials */
  tutorials: false,
  /** Disable notifications about new Strapi releases */
  notifications: { release: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
