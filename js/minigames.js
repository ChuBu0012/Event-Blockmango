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

const setMinigames = (datas) => {
  const Minigames = datas;
  const cardBox = document.querySelector(".card-box");
  // HomePage
  for (let icn = 0; icn < 4; icn++) {
    const icon = document.createElement("img");
    icon.src = Minigames[icn]["icon"];
    document.getElementById("icongame")?.appendChild(icon);
  }
  for (let icn = 4; icn < 8; icn++) {
    const icon = document.createElement("img");
    icon.src = Minigames[icn]["icon"];
    document.getElementById("icongame1")?.appendChild(icon);
  }

  // Card
  // card title color 12 item จำนวนสีที่ใส่ 3, 6 , 12
  const hColor = [
    "#E26868",
    "#1C3879",
    "#E26A2C",

    "#9F73AB",
    "#395144",
    "#B73E3E",

    "#001253",
    "#E26A2C",
    "#815B5B",

    "#3F3B6C",
    "#E9290F",
    "#B73E3E",
  ];
  //card des color 12 item จำนวนสีที่ใส่ 3, 6 , 12
  let hCount = 0;
  const desColor = [
    "#FF8787",
    "#495C83",
    "#ff8243",

    "#9F73AB",
    "#4E6C50",
    "#DD5353",

    "#3E6D9C",
    "#ff8243",
    "#9E7676",

    "#624F82",
    "#FF6107",
    "#DD5353",
  ];
  let desCount = 0;
  const genreColor = [
    "#E26868",
    "#1C3879",
    "#ff8243",

    "#9F73AB",
    "#395144",
    "#B73E3E",

    "#001253",
    "#ff8243",
    "#815B5B",

    "#3F3B6C",
    "#FF6107",
    "#B73E3E",
  ];
  let genreCount = 0;
  Minigames.forEach((ele, index) => {
    // card Item
    const divCardItem = document.createElement("div");
    divCardItem.className = "card-item";
    const divCardImg = document.createElement("div");
    divCardImg.className = "card-img";

    const CardImg = document.createElement("img");
    const img = ele.icon;
    CardImg.src = img;

    divCardImg?.appendChild(CardImg);

    // card Content
    const divCardContent = document.createElement("div");
    divCardContent.className = "card-content";

    divCardContent.innerHTML += `<h2 style="color:${hColor[hCount]};">${ele.name}</h2>`;
    hCount++;
    if (hCount === hColor.length) {
      hCount = 0;
    }

    let description = ele.description;
    if (description.length > 600) {
      description = description.substring(0, 400);
      divCardContent.innerHTML += `<p style="color:${desColor[desCount]};">${description}...</p>`;
    } else {
      divCardContent.innerHTML += `<p style="color:${desColor[desCount]};">${description}</p>`;
    }

    desCount++;
    if (desCount === hColor.length) {
      desCount = 0;
    }

    // card Genre
    const divCardGenre = document.createElement("div");
    divCardGenre.className = "card-genre";
    divCardGenre.innerHTML = `<h3 style="color:${genreColor[genreCount]};">${ele.genre}</h3>`;
    genreCount++;
    if (genreCount === hColor.length) {
      genreCount = 0;
    }

    //card Play
    const divCardPlay = document.createElement("div");
    divCardPlay.className = "card-play";
    const playLink = document.createElement("a");
    playLink.href = "";
    const btnPlay = document.createElement("button")
    btnPlay.innerHTML = "Play!"
    playLink?.appendChild(btnPlay)
    divCardPlay?.appendChild(playLink);

    divCardItem?.appendChild(divCardImg);
    divCardItem?.appendChild(divCardContent);
    divCardItem?.appendChild(divCardGenre);
    divCardItem?.appendChild(divCardPlay);

    cardBox?.appendChild(divCardItem);
  });
};
