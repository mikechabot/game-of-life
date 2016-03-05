import prod from './configure-store.prod';
import dev from './configure-store.dev';

export default process.env.NODE_ENV === 'production'
    ? prod
    : dev