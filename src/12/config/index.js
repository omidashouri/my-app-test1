// eslint-disable-next-line no-restricted-globals
const isDev = location.hostname === 'localhost';

const DEV_CONFIG = {
    API_URL: 'https://localhost'
}

const PROD_CONFIG = {
    API_URL: 'https://laki.com:9595'
}

export const Configs = isDev ? DEV_CONFIG : PROD_CONFIG;