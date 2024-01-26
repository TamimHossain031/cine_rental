function getImgUrl(name) {
  return new URL(`../movie-covers/${name}`, import.meta.url).href;
}

export { getImgUrl };
