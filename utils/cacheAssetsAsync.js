import { Asset, Font } from 'exponent';

const cacheAssetsAsync = ({ images = [], fonts = [] }) => (
  Promise.all([
    ...cacheImages(images),
    ...cacheFonts(fonts)
  ])
);

const cacheImages = images => (
  images.map(image => Asset.fromModule(image).downloadAsync())
);

const cacheFonts = fonts => (
  fonts.map(font => Font.loadAsync(font))
);

export default cacheAssetsAsync;
