const oneBut = () => {
  let Insert = one.value.trim();
  if (Insert === "") {
    valtext.innerHTML = "Input valid Text";
    show.innerHTML = "";
  } else {
    const value = Insert.toLowerCase();
    show.innerHTML = value;
    valtext.innerHTML = "";
  }
};

const twoBut = () => {
  let insert = two.value.trim();
  if (insert === "") {
    valtext2.innerHTML = "Input valid Text";
  } else {
    const answer = insert.replace(/\s+/g, " ").trim();
    showTwo.innerHTML = answer;
    valtext2.innerHTML = "";
  }
};
const threeBut = () => {
  let insert = three.value;
  if (insert === "") {
    valtext3.innerHTML = "Input valid Number of Items";
  } else if (insert % 2 === 0) {
    valtext3.innerHTML = `<span class="text-success fs-4">Congratulations you can use the discount grant</span>`;
  } else {
    valtext3.innerHTML = "Error you cannot use the discount grant";
  }
};

const fourBut = () => {
  let insert = four.value;
  if (insert === "") {
    valtext4.innerHTML = "Input the temperature";
    showFour.innerHTML = "";
  } else {
    if (insert <= 19) {
      showFour.innerHTML = '<span class="text-primary">Cold temperature</span>';
    } else if (insert >= 20 && insert <= 28) {
      showFour.innerHTML = '<span class="text-success">Warm temperature</span>';
    } else if (insert >= 28) {
      showFour.innerHTML = '<span class="text-danger">Hot temperature</span>';
    }
    valtext4.innerHTML = "";
  }
};

const fiveBut = () => {
  let weight = num1.value;
  let height = num2.value;

  if (weight === "" || height === "") {
    valtext5.innerHTML = "Invalid credentials";
    showFive.innerHTML = "";
  } else {
    let answer = weight / height ** 2;
    if (answer < 18.5) {
      showFive.innerHTML = "Sorry you need yo eat more food";
    } else if (answer >= 18.5 && answer <= 24.9) {
      showFive.innerHTML = " Congratulations you need to keep it up";
    } else if (answer >= 25 && answer <= 29.9) {
      showFive.innerHTML = "Sorry you need to watch your weight";
    } else if (answer >= 30) {
      showFive.innerHTML =
        "You need to visit the nearest Hospital for guidance";
    }
    valtext5.innerHTML = "";
  }
};

const sixBut = () => {
  let insert = six.value.trim();
  let mode = /^[A-Za-z0-9_]+$/;
  if (insert === "") {
    valtext6.innerHTML = "Input the required Credentials";
    showSix.innerHTML = "";
  }
  if (mode.test(insert)) {
    showSix.innerHTML = '<span class="text-success">Username Verified</span>';
    valtext6.innerHTML = "";
  } else {
    valtext6.innerHTML = "Invalid Credentials";
  }
};

const sevenBut = () => {
  let insert = seven.value;
  if (insert === "") {
    valtext7.innerHTML = "Input the luggage weight";
    showSeven.innerHTML = "";
  } else {
    if (insert < 20) {
      showSeven.innerHTML = "Your luggage is Underweight";
    }
    if (insert >= 20 && insert <= 30) {
      showSeven.innerHTML = "Your luggage is Allowed";
    }
    if (insert > 30) {
      showSeven.innerHTML =
        '<span class="text-danger">Your luggage is Over-weight and it cannot be allowed</span>';
    }
    valtext7.innerHTML = "";
  }
};

const eightBut = () => {
  let insert = eight.value.trim();
  let mode = /^[A-Za-z0-9._%+-]+@oauife\.edu\.ng$/i;

  if (insert === "") {
    valtext88.innerHTML = "Input the required Credentials";
    show8.innerHTML = "";
  } else if (mode.test(insert)) {
    show8.innerHTML = '<span class="text-success">Email Verified</span>';
    valtext88.innerHTML = "";
  } else {
    show8.innerHTML = '<span class="text-danger">Invalid Email</span>';
    valtext88.innerHTML = "";
  }
};

const nineBut = () => {
  let answer = nine.value;

  if (answer === "" || answer < 0 || answer > 100) {
    valtext9.innerHTML = "Input valid score";
    show9.innerHTML = "";
  } else {
    if (answer >= 70 && answer <= 100) {
      show9.innerHTML = '<span class="text-success">A =  Excellent</span>';
    } else if (answer >= 60 && answer <= 69) {
      show9.innerHTML = "B =  Very Good";
    } else if (answer >= 50 && answer <= 59) {
      show9.innerHTML = "C =  Good";
    } else if (answer >= 40 && answer <= 49) {
      show9.innerHTML = "D =  Pass";
    } else if (answer >= 0 && answer <= 39) {
      show9.innerHTML = '<span class="text-danger">F = Fail</span>';
    }
    valtext9.innerHTML = "";
  }
};

const tenBut = () => {
  let amount = ten.value;

  if (amount === "") {
    valtext10.innerHTML = "Input your Price";
    showTen.innerHTML = "";
  } else {
    let discount = 0;
    if (amount < 5000) {
      discount = 0;
    } else if (amount >= 5000 && amount <= 10000) {
      discount = 0.05;
    } else if (amount >= 10001 && amount <= 20000) {
      discount = 0.1;
    } else if (amount > 20000) {
      discount = 0.15;
    }

    let total = amount - amount * discount;
    showTen.innerHTML = total;
    valtext10.innerHTML = "";
  }
};
const elevenBut = () => {
  let scoreNum = score.value;
  let courseNum = course.value.trim().toLowerCase();
  if (scoreNum === "" || courseNum === "" || scoreNum > 400) {
    valtext11.innerHTML = "Invalid credentials";
    return;
  }

  let cutoff = 0;
  if (courseNum === "medicine") {
    cutoff = 280;
  } else if (courseNum === "engineering") {
    cutoff = 250;
  } else if (courseNum === "sciences") {
    cutoff = 220;
  } else if (courseNum === "art") {
    cutoff = 200;
  } else {
    showEleven.innerHTML = "Course not recognized";
    valtext11.innerHTML = "";
  }

  if (scoreNum >= cutoff) {
    showEleven.innerHTML = "You are eligible";
    valtext11.innerHTML = "";
  } else {
    showEleven.innerHTML = `You are not eligible. The cut off for ${courseNum} is ${cutoff}.`;
    valtext11.innerHTML = "";
  }
  
};

const twelveBut = () => {
  let currentYear = Number("2025");
  let birthDate = dob.value;
  if (birthDate === "") {
    valtext12.innerHTML = "Input your date of birth";
    return;
  }
  let voterValidation = currentYear - Number(birthDate);
  if (voterValidation >= 18) {
    showTwelve.innerHTML = "You are eligible to vote";
    valtext12.innerHTML = "";
  } else {
    const whenVote = 18 - voterValidation;
    showTwelve.innerHTML = `You are not eligible to vote. You can vote in ${whenVote} years.`;
    valtext12.innerHTML = "";
  }
};
