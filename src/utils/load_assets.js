export const getAssetsURL = (path) => {
  // console.log(path);
  // console.log(`@/assets/img/${path}`);
  // console.log(import.meta.url);
  // console.log(new URL(`@/assets/img/${path}`, import.meta.url));
  // return new URL(`../assets/img/${path}`, import.meta.url).href
  return new URL(`../assets/img/${path}`, import.meta.url).href
}


// export const ASSET_BASE = new URL('../assets/', import.meta.url).href

// export function getAssetsURL(name) {
//   return new URL(`./img/tabbar/tabbar_home.png`, ASSET_BASE).href
// }
