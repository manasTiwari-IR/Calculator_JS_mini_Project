let val = "";
let Eval = "";
let dis = document.querySelector(".input");
val = dis.value;

val = val.trim();
Eval = val;
dis.value = val;

let keyallowed1 = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "+",
  "-",
  "*",
  "/",
  ".",
  "Enter",
  "Backspace",
  "%",
  "^",
];

function display(v) {
  //  val.trim();
  //  Eval.trim();
  dis.value = val;
  if (val == "Overload Error" || val == "Syntax Error" || val == "undefined") {
    val = "";
    Eval = "";
    dis.value = val;
  }

  if (v == "." && val == "") {
  } else if (
    (val[val.length - 1] == "." || val == "") &&
    (v == "+"  || v == "*" || v == "/" || v == "%" || v == "^")
  ) {
  } else if (
    val[val.length - 1] == ")" &&
    (v == "1" ||
      v == "2" ||
      v == "3" ||
      v == "4" ||
      v == "5" ||
      v == "6" ||
      v == "7" ||
      v == "8" ||
      v == "9" ||
      v == "." ||
      v == "0")
  ) {
  } else if (
    val[val.length - 1] == "π" &&
    (v == "1" ||
      v == "2" ||
      v == "3" ||
      v == "4" ||
      v == "5" ||
      v == "6" ||
      v == "7" ||
      v == "8" ||
      v == "9" ||
      v == "0")
  ) {
    val += v;
    Eval += "*";
    Eval += v;
    dis.value = val;
  } else {
    val += v;
    Eval += v;
    dis.value = val;
  }
  dis.focus();
}

function overload() {
  if (val.length > 23 || Eval.length > 23) {
    return true;
  }
  return false;
}

// function syntaxError() {
//   if (eval(Eval) == 'SyntaxError') {
//     val = "Syntax Error";
//     Eval = "";
//     dis.value = "Syntax Error";
//     dis.focus();
//     return true;
//   }
//   return false;
// }

document.querySelector(".btnAC").addEventListener("click", () => {
  val = "";
  Eval = "";
  dis.value = val;
  dis.focus();
});

// function del() {
//   if (val == "Overload Error" || val == "Syntax Error" || val == "undefined" || val == "") {
//     val = "";
//     Eval = "";
//     dis.value = val;
//   } else {
//     val.trim();
//     let say = val.slice(0,-1);
//     val = say;
//     dis.focus();
//     Eval = val;
//     dis.value = val;
//   }
//   dis.focus();
// }
function toFixedIfNecessary(value, dp) {
  return +parseFloat(value).toFixed(dp);
}
function solve() {
  // val = val.trim();
  // Eval = Eval.trim();
  if (
    val == "Overload Error" ||
    val == "Syntax Error" ||
    val == "undefined" ||
    val == "NaN" ||
    val == ""
  ) {
    val = "";
    Eval = "";
    dis.value = val;
  } else {
    try {
      val = eval(Eval);
      Eval = val;
      dis.focus();
    } catch (e) {
      val = "Syntax Error";
      Eval = "";
      dis.focus();
    }
    // if(val == Math.ceil(val))
    //     dis.value = val;
    // else
    //     dis.value = val.toFixed(8);
    val = toFixedIfNecessary(val, 10);
    Eval = val;
    dis.value = val;

    dis.focus();
  }
}

dis.addEventListener("keydown", (e) => {
  if (
    val == "Overload Error" ||
    val == "Syntax Error" ||
    val == "undefined" ||
    val == "NaN"
  ) {
    val = "";
    Eval = "";
    dis.value = val;
  }
  if (!keyallowed1.includes(e.key)) {
    e.preventDefault();
  } else {
    if (e.key == "Enter") {
      e.preventDefault();
      if (
        val == "Overload Error" ||
        val == "Syntax Error" ||
        val == "undefined" ||
        val == "NaN"
      ) {
        val = "";
        Eval = "";
        dis.value = val;
      } else if (!overload()) solve();
      else {
        val = "Overload Error";
        Eval = "";
        dis.value = "Overload Error";
        dis.focus();
      }
      dis.focus();
    }
    if (e.key == "Backspace") {
      e.preventDefault();
      val = "";
      Eval = "";
      dis.value = val;
      dis.focus();
    }
    if (e.key == "^") {
      e.preventDefault();
      val += "^";
      Eval += "**";
      dis.value = val;
      dis.focus();
    } else if (e.key != "Enter" && e.key != "Backspace") {
        val += e.key;
        Eval += e.key;
        dis.val = val;
        //
        // console.log(Eval);
      dis.focus();
    }
  }
});

// document.querySelector(".btnclear").addEventListener("click", () => {
//   console.log("clear");
//  
//   console.log(Eval);
//   del();
//   dis.focus();
// });
document.querySelector(".btnequal").addEventListener("click", () => {
  if (!overload()) solve();
  else {
    val = "Overload Error";
    Eval = "";
    dis.value = "Overload Error";
    dis.focus();
  }
  dis.focus();
});

document.querySelector(".btnpie").addEventListener("click", () => {
  if (
    val == "Overload Error" ||
    val == "Syntax Error" ||
    val == "undefined" ||
    val == "NaN"
  ) {
    val = "";
    Eval = "";
    dis.value = val;
  }
  if (val[val.length - 1] == ".") {
    dis.value = val;
  } else if (val == "") {
    val += "π";
    Eval += "3.14159";
    dis.value = val;
  } else if (
    val[val.length - 1] != "+" ||
    val[val.length - 1] != "-" ||
    val[val.length - 1] != "*" ||
    val[val.length - 1] != "/" ||
    val[val.length - 1] != "%" ||
    val[val.length - 1] != "^" ||
    val[val.length - 1] == "!" ||
    val[val.length - 1] == ")" ||
    val[val.length - 1] == "π"
  ) {
    val += "π";
    Eval += "*3.14159";
    dis.value = val;
  } else {
    val += "π";
    Eval += "3.14159";
    dis.value = val;
  }
  //   console.log(Eval)
  dis.focus();
});

document.querySelector(".btnpow").addEventListener("click", () => {
  if (
    val == "Overload Error" ||
    val == "Syntax Error" ||
    val == "undefined" ||
    val == "NaN"
  ) {
    val = "";
    Eval = "";
    dis.value = val;
  }
  if (val[val.length - 1] != "." && val != "") {
    val += "^";
    Eval += "**";
    dis.value = val;
    dis.focus();
  }
});

// dis.addEventListener("keydown", (e) => {
//     if(e.key == '^')
//         {
//             e.preventDefault();
//             val += "^";
//             Eval += "**";
//             dis.value = val;
//             dis.focus();
//         }
// });
document.querySelector(".btnlog").addEventListener("click", () => {
  if (
    val == "Overload Error" ||
    val == "Syntax Error" ||
    val == "undefined" ||
    val == "NaN"
  ) {
    val = "";
    Eval = "";
    dis.value = val;
  }

  if (val != "") {
    //
    // console.log(Eval);
    solve();
    let calc = Math.log10(val);
    val = `log(${val})`;
    // console.log(calc);
    Eval = calc.toString();
    dis.value = val;
    //
    // console.log(Eval);
  }
  dis.focus();
});

document.querySelector(".btnln").addEventListener("click", () => {
  if (
    val == "Overload Error" ||
    val == "Syntax Error" ||
    val == "undefined" ||
    val == "NaN"
  ) {
    val = "";
    Eval = "";
    dis.value = val;
  }
  if (val != "") {
    //
    // console.log(Eval);
    solve();
    let calc = Math.log(val);
    val = `ln(${val})`;
    // console.log(calc);
    Eval = calc.toString();
    dis.value = val;
    //
    // console.log(Eval);
  }
  dis.focus();
});

document.querySelector(".btnfact").addEventListener("click", () => {
  if (
    val == "Overload Error" ||
    val == "Syntax Error" ||
    val == "undefined" ||
    val == "NaN"
  ) {
    val = "";
    Eval = "";
    dis.value = val;
  }
  if (val != "") {
    val = `(${val})!`;
    let calc = 1;
    for (let i = 1; i <= parseInt(Eval); i++) {
      calc *= i;
    }
    Eval = calc.toString();
    dis.value = val;
  }
  dis.focus();
});
