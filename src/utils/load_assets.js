export const getAssetsURL = (imgPath) => {
  const imageUrlGlob = import.meta.glob('../assets/img/**/*', {
    eager: true,
    query: 'url',
  })
  return imageUrlGlob[`../assets/img/${imgPath}`].default
}
