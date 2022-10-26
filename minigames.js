//Fetch API Minigames
fetch("https://gamertocoder.garena.co.th/api/minigames")
  .then((res) => {
    if (res.status !== 200) {
      return res.status;
    }
    return res.json();
  })
  .then((data) => {
    setMinigames(data);
  })
  .catch((err) => console.log(err));

const setMinigames = (datas) =>{
  const Minigames = datas

}