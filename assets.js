//Fetch API Assets
fetch("https://gamertocoder.garena.co.th/api/assets")
  .then((res) => {
    if (res.status !== 200) {
      return res.status;
    }
    return res.json();
  })
  .then((data) => {
    setAssets(data);
  })
  .catch((err) => console.log(err));
//set data
const setAssets = (data) => {
  const datas = data;
  const banner = data.banner;
  const benny = data.benny;
  const characters = data.characters;
  const logo = data.logo;
  const wallpaper = data.wallpaper;
};
