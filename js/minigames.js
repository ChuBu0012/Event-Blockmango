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
  const Minigames = datas;
  console.log(datas);
  for (let icn = 0; icn < 4; icn++) {
    const icon = document.createElement('img');
    icon.src = datas[icn]['icon']
    document.getElementById("icongame").appendChild(icon);
  }
  for (let icn = 4; icn < 8; icn++) {
    const icon = document.createElement('img');
    icon.src = datas[icn]['icon']
    document.getElementById("icongame1").appendChild(icon);
  }
}