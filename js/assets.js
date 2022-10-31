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
  const banner = data.banner;
  const benny = data.benny;
  const characters = data.characters;
  const logo = data.logo;
  const wallpaper = data.wallpaper;

  //logo sidebar
  const logomb = document.createElement("img");
  logomb.src = logo[0];
  document.getElementById("logomb")?.appendChild(logomb);

  const slider = document.querySelector(".slider");
  const boxSlide = document.querySelector(".box-slide");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");
  const navigationVisibility = document.querySelector(".navigation-visibility");
  // insert characters & logo footer
  const cartoon = document.getElementById("cartoon");
  for (let num = 7; num <= 10; num++) {
    const crt = document.createElement("img");
    crt.className = "column1";
    crt.src = characters[num];
    document.getElementById("crt")?.appendChild(crt);
    if (num === 8) {
      num++;
    }
  }
  const mng = document.createElement("div");
  mng.innerHTML = "Create your character.";
  mng.className = "mct";
  document.getElementById("crt")?.appendChild(mng);
  // cartoon.innerHTML = "<img src = '" + characters[9] + "'>";
  const img = "https://imgz.io/images/2022/10/31/bear_kid_01.png";

  cartoon.innerHTML = `<img src=${img}>`;

  //component slideImg & slideIcon
  banner.reverse();
  banner.forEach((ele, index) => {
    let div = document.createElement("div");
    if (index === 0) {
      div.className = "slide active";
    } else {
      div.className = "slide";
    }
    let img = document.createElement("img");
    img.src = ele;
    img.draggable = false;
    img.addEventListener("dragstart", () => false);

    div?.appendChild(img);
    boxSlide?.appendChild(div);

    let slideIcon = document.createElement("div");
    if (index === 0) {
      slideIcon.className = "slide-icon active";
    } else {
      slideIcon.className = "slide-icon";
    }
    navigationVisibility?.appendChild(slideIcon);
  });

  const slides = document.querySelectorAll(".slide");
  const slideIcons = document.querySelectorAll(".slide-icon");
  const numberOfSlides = slides.length;
  var slideNumber = 0;

  //img slider next btn
  nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber++;

    if (slideNumber > numberOfSlides - 1) {
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  });

  //img slider previous btn
  prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber--;

    if (slideNumber < 0) {
      slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  });

  //img slider autoplay
  var playSlider;

  var repeater = () => {
    playSlider = setInterval(() => {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
      });

      slideNumber++;

      if (slideNumber > numberOfSlides - 1) {
        slideNumber = 0;
      }

      slides[slideNumber].classList.add("active");
      slideIcons[slideNumber].classList.add("active");
    }, 5000);
  };
  repeater();

  //stop the img slider autoplay
  slider.addEventListener("mouseover", () => {
    clearInterval(playSlider);
  });

  //start the img slider autoplay again
  slider.addEventListener("mouseout", () => {
    repeater();
  });
};
