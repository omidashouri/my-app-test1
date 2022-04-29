// eslint-disable-next-line no-restricted-globals
const isDev = window.location.hostname === 'localhost';

const DEV_CONFIG = {
    API_URL: 'https://localhost',
    DEFAULT_LANGUAGE : 'EN'
}

const PROD_CONFIG = {
    API_URL: 'https://laki.com:9595',
    DEFAULT_LANGUAGE : 'FA'
}

export const Configs = isDev ? DEV_CONFIG : PROD_CONFIG;