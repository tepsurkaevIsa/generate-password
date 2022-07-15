function generatePassword(length, string, amount) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";
  const symbols = "!#$%&()*+,-./:;<=>?@[]^_{|}~";

  let newPassword = "";
  let newArrPassword = [];
  let passwordComplexity;

  switch (string) {
    case "easy":
      passwordComplexity = alphabet;
      break;
    case "medium":
      passwordComplexity = (alphabet + digits);
      break;
    case "hard":
      passwordComplexity = (alphabet + digits + symbols)
      break;
  }

  if (typeof amount === "number" && amount >= 2) {
    for (let i = 0; i < amount; i++) {
      for (let i = 0; i < length; i++) {
        newPassword += passwordComplexity[Math.floor(Math.random() * passwordComplexity.length)];
      }
      if (newArrPassword.includes(newPassword)) {
        i--
        newPassword = "";
      } else {
        newArrPassword.push(newPassword);
        newPassword = "";
      }
    }
  } else {
    for (let i = 0; i < length; i++) {
      newPassword += passwordComplexity[Math.floor(Math.random() * passwordComplexity.length)];
    }
  }

  return amount >= 2 ? newArrPassword : newPassword;
}

console.log(generatePassword(1, "easy", 52));