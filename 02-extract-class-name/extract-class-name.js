function extractClassName(sessionTitle) {
  let result = "";
  const months = {
    Januar: "01",
    Februar: "02",
    März: "03",
    Maerz: "03",
    April: "04",
    Mai: "05",
    Juni: "06",
    Juli: "07",
    August: "08",
    September: "09",
    Oktober: "10",
    November: "11",
    Dezember: "12",
  };
  const regEx =
    /Class [0-9]{4} (Januar|Februar|März|Maerz|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember)/;

  const month = sessionTitle.match(
    /Januar|Februar|März|Maerz|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember/
  );

  if (regEx.test(sessionTitle)) {
    result += sessionTitle.match(/[0-9]{4}/) + "-" + months[month];
  } else {
    result = null;
  }
  return result;
}
