const btn = document.querySelector(".theme-slide-button button");

const btnBackground = document.querySelector(".theme-slide-button");

const screen = document.querySelector(".screen");

const keyPad = document.querySelector(".keys");

const keys = document.querySelectorAll(".keys div");

const span = document.querySelectorAll(".theme-slide-button span");

const theme1 = {
  background: {
    "main ackground": "hsl(222, 26%, 31%)",
    "toggle background/key background": "hsl(223, 31%, 20%)",
    "screen background": "hsl(224, 36%, 15%)",
  },
  keys: {
    "key background Del/Reset": "hsl(225, 21%, 49%)",
    "key shadow Del/Reset": "hsl(224, 28%, 35%)",
    "key background, toggle": "hsl(6, 63%, 50%)",
    "key shadow, toggle": "hsl(6, 70%, 34%)",
    "key background Numbers": "hsl(30, 25%, 89%)",
    "key shadow Numbers": "hsl(28, 16%, 65%)",
  },
  text: {
    Numbers: "hsl(221, 14%, 31%)",
    Text: "#fff",
  },
};
const theme2 = {
  background: {
    "main ackground": "hsl(0, 0%, 90%)",
    "toggle background/key background": "hsl(0, 5%, 81%)",
    "screen background": "hsl(0, 0%, 93%)",
  },
  keys: {
    "key background Del/Reset": "hsl(185, 42%, 37%)",
    "key shadow Del/Reset": "hsl(185, 58%, 25%)",
    "key background, toggle": "hsl(25, 98%, 40%)",
    "key shadow, toggle": "hsl(25, 99%, 27%)",
    "key background Numbers": "hsl(45, 7%, 89%)",
    "key shadow Numbers": "hsl(35, 11%, 61%)",
  },
  text: {
    Numbers: "hsl(60, 10%, 19%)",
    Text: "#fff",
  },
};

const theme3 = {
  background: {
    "main ackground": "hsl(268, 75%, 9%)",
    "toggle background/key background": "hsl(268, 71%, 12%)",
    "screen background": "hsl(268, 71%, 12%)",
  },
  keys: {
    "key background Del/Reset": "hsl(281, 89%, 26%)",
    "key shadow Del/Reset": "hsl(285, 91%, 52%)",
    "key background, toggle": "hsl(176, 100%, 44%)",
    "key shadow, toggle": "hsl(177, 92%, 70%",
    "key background Numbers": "hsl(268, 47%, 21%)",
    "key shadow Numbers": "hsl(290, 70%, 36%)",
  },
  text: {
    "Light yellow": "hsl(52, 100%, 62%)",
    "Very dark blue": "hsl(198, 20%, 13%)",
    "White (text)": "hsl(0, 0, 100%)",
  },
};

span.forEach((spa) => {
  spa.addEventListener("click", () => {
    switch (+spa.className) {
      //?Case 1
      case 1:
        //! Changing Span Color
        span.forEach((span) => (span.style.color = theme1.text.Text));
        document.querySelector("p").style.color = theme1.text.Text;
        //! Changin Logo Color
        document.querySelector(".logo").style.color = theme1.text.Text;
        //!Slide The Button And BgColor
        btn.style.transform = "translateX(-20px)";
        btn.style.background = theme1.keys["key shadow, toggle"];
        btn.onmouseover = () => (btn.style.backgroundColor = "");
        btn.onmouseout = () =>
          (btn.style.backgroundColor = theme1.keys["key shadow, toggle"]);
        //!Changin the toggle button background
        btnBackground.style.background =
          theme1.background["toggle background/key background"];
        //!Changin The Screen Background And Color
        screen.style.background = theme1.background["screen background"];
        screen.style.color = theme1.text.Text;
        //! Changing The Key Pad Color
        keyPad.style.background =
          theme1.background["toggle background/key background"];
        //!Changin The Keys Background And They Box Shadow And The Color
        keys.forEach((e) => {
          if (e.className == "del" || e.className == "reset") {
            e.style.background = theme1.keys["key background Del/Reset"];
            e.style.boxShadow = `0px 3px ${theme1.keys["key shadow Del/Reset"]}`;
            e.style.color = theme1.text.Text;
            e.onmouseover = () => (e.style.background = "hsl(225, 21%, 59%)");
            e.onmouseout = () =>
              (e.style.background = theme1.keys["key background Del/Reset"]);
          } else if (e.className == "e") {
            e.style.backgroundColor = theme1.keys["key background, toggle"];
            e.style.boxShadow = `0px 3px ${theme1.keys["key shadow, toggle"]}`;
            e.style.color = theme1.text.Text;
            e.onmouseover = () => (e.style.background = "hsl(6, 63%, 60%)");
            e.onmouseout = () =>
              (e.style.backgroundColor = theme1.keys["key background, toggle"]);
          } else {
            e.style.background = theme1.keys["key background Numbers"];
            e.style.boxShadow = `0px 3px ${theme1.keys["key shadow Numbers"]}`;
            e.style.color = theme1.text.Numbers;
            e.onmouseover = () => (e.style.background = "hsl(30, 25%, 99%)");
            e.onmouseout = () =>
              (e.style.backgroundColor = theme1.keys["key background Numbers"]);
          }
        });
        //!Changin the Body Background
        document.body.style.backgroundColor =
          theme1.background["main ackground"];
        break;
      //?Case 2
      case 2:
        //! Changing Span Color
        span.forEach((span) => (span.style.color = theme2.text.Numbers));
        document.querySelector("p").style.color = theme2.text.Numbers;
        //! Changin Logo Color
        document.querySelector(".logo").style.color = theme2.text.Numbers;
        //!Slide The Button And BgColor
        btn.style.transform = "translateX(0px)";
        btn.style.background = theme2.keys["key background, toggle"];
        btn.onmouseover = () =>
          (btn.style.backgroundColor = "hsl(25, 99%, 27%)");
        btn.onmouseout = () =>
          (btn.style.background = theme2.keys["key background, toggle"]);
        //!Changin the toggle button background
        btnBackground.style.background =
          theme2.background["toggle background/key background"];
        //!Changin The Screen Background And Color
        screen.style.background = theme2.background["screen background"];
        screen.style.color = theme2.text.Numbers;
        //! Changing The Key Pad Color
        keyPad.style.background =
          theme2.background["toggle background/key background"];
        //!Changin The Keys Background And They Box Shadow And The Color
        keys.forEach((e) => {
          if (e.className == "del" || e.className == "reset") {
            e.style.background = theme2.keys["key background Del/Reset"];
            e.style.boxShadow = `0px 3px ${theme2.keys["key shadow Del/Reset"]}`;
            e.style.color = theme2.text.Text;
            e.onmouseover = () => (e.style.background = "hsl(185, 42%, 47%)");
            e.onmouseout = () =>
              (e.style.background = theme2.keys["key background Del/Reset"]);
          } else if (e.className == "e") {
            e.style.backgroundColor = theme2.keys["key background, toggle"];
            e.style.boxShadow = `0px 3px ${theme2.keys["key shadow, toggle"]}`;
            e.style.color = theme2.text.Text;
            e.onmouseover = () => (e.style.background = "hsl(25, 98%, 50%)");
            e.onmouseout = () =>
              (e.style.background = theme2.keys["key background, toggle"]);
          } else {
            e.style.background = theme2.keys["key background Numbers"];
            e.style.boxShadow = `0px 3px ${theme2.keys["key shadow Numbers"]}`;
            e.style.color = theme2.text.Numbers;
            e.onmouseover = () => (e.style.background = "hsl(45, 7%, 99%)");
            e.onmouseout = () =>
              (e.style.background = theme2.keys["key background Numbers"]);
          }
        });
        //!Changin the Body Background
        document.body.style.backgroundColor =
          theme2.background["main ackground"];
        break;
      //?Case 3
      case 3:
        //! Changing Span Color
        span.forEach(
          (span) => (span.style.color = theme3.text["Light yellow"])
        );
        document.querySelector("p").style.color = theme3.text["Light yellow"];
        //! Changin Logo Color
        document.querySelector(".logo").style.color =
          theme3.text["Light yellow"];
        //!Slide The Button And BgColor
        btn.style.transform = "translateX(20px)";
        btn.style.background = theme3.keys["key background, toggle"];
        btn.onmouseover = () =>
          (btn.style.backgroundColor = "hsl(177, 92%, 70%)");
        btn.onmouseout = () =>
          (btn.style.backgroundColor = theme3.keys["key background, toggle"]);
        //!Changin the toggle button background
        btnBackground.style.background =
          theme3.background["toggle background/key background"];
        //!Changin The Screen Background And Color
        screen.style.background = theme3.background["screen background"];
        screen.style.color = theme3.text["Light yellow"];
        //! Changing The Key Pad Color
        keyPad.style.background =
          theme3.background["toggle background/key background"];
        //!Changin The Keys Background And They Box Shadow And The Color
        keys.forEach((e) => {
          if (e.className == "del" || e.className == "reset") {
            e.style.background = theme3.keys["key background Del/Reset"];
            e.style.boxShadow = `0px 3px ${theme3.keys["key shadow Del/Reset"]}`;
            e.style.color = theme3.text["White (text)"];
            e.onmouseover = () => (e.style.background = "hsl(281, 89%, 36%)");
            e.onmouseout = () =>
              (e.style.backgroundColor =
                theme3.keys["key background Del/Reset"]);
          } else if (e.className == "e") {
            e.style.backgroundColor = theme3.keys["key background, toggle"];
            e.style.color = theme3.text["Very dark blue"];
            e.style.boxShadow = `0px 3px ${theme3.keys["key shadow, toggle"]}`;
            e.onmouseover = () => (e.style.background = "hsl(176, 100%, 54%)");
            e.onmouseout = () =>
              (e.style.backgroundColor = theme3.keys["key background, toggle"]);
          } else {
            e.style.background = theme3.keys["key background Numbers"];
            e.style.color = theme3.text["Light yellow"];
            e.style.boxShadow = `0px 3px ${theme3.keys["key shadow Numbers"]}`;
            e.onmouseover = () => (e.style.background = "hsl(268, 47%, 31%)");
            e.onmouseout = () =>
              (e.style.backgroundColor = theme3.keys["key background Numbers"]);
          }
        });
        //!Changin the Body Background
        document.body.style.backgroundColor =
          theme3.background["main ackground"];
        break;
    }
  });
});
