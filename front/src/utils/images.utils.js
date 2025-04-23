const imgUrl = (url) => {
    if (url) return url;
    else return '/catWriting.png'
};

const images = {
    buildSection: 'https://res.cloudinary.com/dtzy75wyt/image/upload/v1741449230/images/gggucjowvbkxazreusm8.png',
    catCarrot: 'https://res.cloudinary.com/dtzy75wyt/image/upload/v1741467574/images/pmao5omkmnxaaqcqvsln.png',
    catwhitPc: 'https://res.cloudinary.com/dtzy75wyt/image/upload/v1741716782/images/btvc4fchyvhy4dvvv9wm.png',
    publicity: 'https://res.cloudinary.com/dtzy75wyt/image/upload/v1742492649/images/auanxacydq6ra6wksygg.png',
    catTerCond: 'https://res.cloudinary.com/dtzy75wyt/image/upload/v1742740709/images/sjo9thjyrnn2dc8zhplj.png',
    mySigns: 'https://res.cloudinary.com/dtzy75wyt/image/upload/v1743974876/images/lmo587s9jlkdn3hpr5hb.png',
    megaphone: 'https://res.cloudinary.com/dtzy75wyt/image/upload/v1744405870/images/hbd89pyxbwi60nfdrjrl.png',
};

export { imgUrl, images };