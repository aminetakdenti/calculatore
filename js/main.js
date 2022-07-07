let result = 0;
screen.innerText = "0";
let nbr1 = 0;
let nbr2 = 0;
let opt = "";

keys.forEach((key) => {
  key.addEventListener("click", () => {
    switch (key.className) {
      case "reset":
        screen.innerText = "0";
        result = 0;
        nbr1 = 0;
        nbr2 = 0;
        break;
      case "del":
        screen.innerText = screen.innerText.slice(
          0,
          screen.innerText.length - 1
        );
        if (screen.innerText === "") screen.innerText = "0";
        break;
      case "*":
        if (nbr1 === 0) nbr1 = +screen.innerText;
        else nbr1 *= +screen.innerText;
        screen.innerText = "0";
        opt = "*";
        break;
      case "+":
        nbr1 += +screen.innerText;
        screen.innerText = "0";
        opt = "+";
        break;
      case "-":
        if (nbr1 === 0) nbr1 = parseFloat(screen.innerText);
        else nbr1 -= parseFloat(screen.innerText);
        screen.innerText = 0;
        opt = "-";
        break;
      case "/":
        if (nbr1 === 0) nbr1 = parseFloat(screen.innerText);
        else nbr1 /= parseFloat(screen.innerText);
        screen.innerText = 0;
        opt = "/";
        break;
      default:
        if (screen.innerText == "0") screen.innerText = key.className;
        else screen.innerText = `${screen.innerText}${key.innerText}`;
        break;
      case "e":
        switch (opt) {
          case "+":
            nbr1 += +screen.innerText;
            screen.innerText = nbr1;
            nbr1 = 0;
            break;
          case "-":
            nbr1 = nbr1 - parseFloat(screen.innerText);
            screen.innerText = nbr1;
            nbr1 = 0;
            break;
          case "*":
            nbr1 *= parseFloat(screen.innerText);
            screen.innerText = nbr1;
            nbr1 = 0;
            break;
          case "/":
            nbr1 /= parseFloat(screen.innerText);
            screen.innerText = nbr1;
            nbr1 = 0;
            break;
        }
        break;
    }
  });
});
