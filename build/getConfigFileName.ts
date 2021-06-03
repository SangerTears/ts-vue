/**
 * 
 * @param env
 *
 */
export const getConfigFileName = (env: Record<string, any>)=>{
    return `__PRODUCTION__${env.VITE_GLOB_APP_TITLE || '__APP'}__CONF__`
    .toUpperCase()
    .replace(/\s/g, '');
}