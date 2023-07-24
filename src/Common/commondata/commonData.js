// import days from "dayjs";
var dayjs = require("dayjs");

let optionsForSort = [
  "PRICE",
  "CLOSING_DATE",
  "DOWN_PAYMENT_AMOUNT",
  "LOAN_TYPE",
];
let optionsForOrder = ["ASC", "DEC"];
let getOfferName = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var daysData = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// let dateChangeRequest = (request) => {
//   var options = { year: "numeric", month: "numeric", day: "numeric" };
//   let d = new Date(request);
//   let updateDate = new Date(d.setDate(d.getDate() - 1)).toLocaleDateString(
//     "en-US",
//     options
//   );
//   let dd = new Date(updateDate);
//   if (
//     daysData[dd.getDay()] === "Sunday" ||
//     daysData[dd.getDay()] === "Saturday"
//   ) {
//     updateDate = new Date(d.setDate(d.getDate() - 1)).toLocaleDateString(
//       "en-US",
//       options
//     );
//   }
//   // console.log("updateDate", request, updateDate);
// };

let getDateData = (dateChange) => {
  var options = { year: "numeric", month: "numeric", day: "numeric" };
  let d = new Date(dateChange);
  // dateChangeRequest(dateChange);
  let updateDate = new Date(d.setDate(d.getDate() - 1)).toLocaleDateString(
    "en-US",
    options
  );
  const date = new Date(updateDate);
  // let exceptDay = daysData[date.getDate()];

  // if (exceptDay === "Sunday" || exceptDay === "Saturday") {
  //   getDateData(updateDate);
  // } else {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  day < 10 && (day = `0${day}`);
  month < 10 && (month = `0${month}`);

  return `${year}-${month}-${day}`;
  // }
};

//calculates the purchase price at the time of page load
let getInputPurchaseValues = (text, price) => {
  let localData = JSON.parse(localStorage.getItem("persistKey"));
  let rowData = {
    "Earnest Money": ((price * 1) / 100).toFixed(2),
    "New Loan": ((price * 95) / 100).toFixed(2),
    "Cash at Closing": ((price * 4) / 100).toFixed(2),
    "Total Price B": (
      +((price * 1) / 100) +
      +((price * 95) / 100) +
      +((price * 4) / 100)
    ).toFixed(2),
    Price: price,
    "Purchase Price": price,
  };
  let returnValues = rowData[text] || 0;
  localData[text] = returnValues;
  // console.log(localData);
  localStorage.setItem("persistKey", JSON.stringify(localData));
  return returnValues;
};

let rowDatakeys = [
  "Purchase Price",
  "Earnest Money",
  "New Loan",
  "Assumption Balance",
  "Private Financing",
  "Seller Financing",
  "Cash at Closing",
  "Price",
  "Total Price B",
];

//calculates the purchase price at the time of onCHange Event
let purchaseNames = (text) => {
  let rowData = {
    "Purchase Price": true,
    "Earnest Money": true,
    "New Loan": true,
    "Assumption Balance": true,
    "Private Financing": true,
    "Seller Financing": true,
    "Cash at Closing": true,
    Price: true,
    "Total Price B": true,
  };

  return rowData[text] || false;
};

let doubleDigitNumber = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
];

let staticStrings = [
  "Price",
  "Highest Escalated Price",
  "Down Payment",
  "Earnest Money",
  "Loan Type",
  "Point in Approval",
  "Concessions",
  "Extra Inclusions",
  "Exclusions",
  "Closing Fee",
  "Status Letter",
  "Record Change Fee",
  "Water Transfer Fee",
  "Due Diligence Docs",
  "Posession Penalty",
  "Inspection Objection Deadline",
  "Inspection Termination Deadline",
  "Loan Termination Deadline",
  "Props Ins Termination Deadline",
  "Additional Prov",
  "Closing Date",
  "Posession Date",
  "Rent Back Cost",
  "Rent Back Deposit",
  "Time to Decide",
  "Items Suggested to Counter",
  "Offer Package Supplements",
  "Notes",
];

let convertDate = (date) => {
  if (date !== undefined) {
    // console.log("dayjs(date).format", dayjs(date).format("MM/DD/YYYY"));
    return dayjs(date).format("MM/DD/YYYY");
  } else {
    return "undefined";
  }
};

let changeLoanTypeTemp = {
  134: "Conventional",
  Conventional: "FHA",
  FHA: "VA",
  VA: "Bond",
};

let loanTypeData = ["Conventional", "FHA", "VA", "Bond"];

let changeData = (data) => {
  return {
    rating: data["rating"],
    Price: data["Price"],
    "Highest Escalated Price": data["Highest Escalated Price"],
    "Down Payment": data["Down Payment"],
    "Earnest Money": data["Earnest Money"],
    "Loan Type": data["Loan Type"],
    "Point In Approval": data["Point In Approval"],
    Concessions: data["Concessions"],
    "Extra Inclusions": data["Extra Inclusions"],
    Exclusions: data["Exclusions"],
    "Closing Fee": data["Closing Fee"],
    "Status Letter": data["Status Letter"],
    "Record Change Fee": data["Record Change Fee"],
    "Water Transfer Fee": data["Water Transfer Fee"],
    "Due Diligence Docs": data["Due Diligence Docs"],
    "Posession Penalty": data["Posession Penalty"],
    "Inspection Objection Deadline": convertDate(
      data["Inspection Objection Deadline"]
    ),
    "Inspection Termination Deadline": convertDate(
      data["Inspection Termination Deadline"]
    ),
    "Loan Termination Deadline": convertDate(data["Loan Termination Deadline"]),
    "Props Ins Termination Deadline": convertDate(
      data["Props Ins Termination Deadline"]
    ),
    "Additional Prov": data["Additional Prov"],
    "Closing Date": convertDate(data["Closing Date"]),
    "Posession Date": convertDate(data["Posession Date"]),
    "Rent Back Cost": data["Rent Back Cost"],
    "Rent Back Deposit": data["Rent Back Deposit"],
    "Time To Decide": data["Time To Decide"],
    "Items Suggested To Counter": data["Items Suggested To Counter"],
    "Offer Package Supplements": data["Offer Package Supplements"],
    Notes: data["Notes"],
  };
};

module.exports = {
  changeData,
  staticStrings,
  purchaseNames,
  getInputPurchaseValues,
  daysData,
  getDateData,
  optionsForSort,
  optionsForOrder,
  getOfferName,
  doubleDigitNumber,
  changeLoanTypeTemp,
  loanTypeData,
  rowDatakeys,
};
