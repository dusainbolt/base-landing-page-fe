import { browserHistory } from "./history";
import { TIME_UTC_FORMAT, DATE_UTC_FORMAT, TYPE_DATE_TIME } from "../common";
import moment from "moment";

export function getTimeNowUnix() {
  return Math.round(new Date().getTime() / 1000);
}

export function countSecondToTime(secs) {
  let days = Math.floor(secs / (60 * 60 * 24));
  let hours = Math.floor((secs % (60 * 60 * 24)) / (60 * 60));
  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let obj = {
    d: days,
    h: hours,
    m: minutes,
    s: seconds,
  };
  return obj;
}

export function showTopHeader(header) {
  header.style.boxShadow = "1px 1px 5px #ddd";
  header.style.position = "fixed";
  header.style.backgroundColor = "white";
}

export function showBodyHeader(header) {
  header.style.boxShadow = "none";
  header.style.position = "absolute";
  header.style.backgroundColor = "transparent";
}

export function checkStringRange(value, min, max) {
  if (!value) return false;
  const length = value.trim().length;
  return length >= min && length <= max;
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function convertDateTime(timeNumber, type = "") {
  if (!timeNumber) return "";
  const timeConvert = moment.unix(timeNumber).format(TIME_UTC_FORMAT.TYPE_2);
  const dateConvert = moment.unix(timeNumber).format(DATE_UTC_FORMAT);
  switch (type) {
    case TYPE_DATE_TIME.DATE:
      return dateConvert;
    case TYPE_DATE_TIME.TIME:
      return timeConvert;
    case TYPE_DATE_TIME.TIME_AND_DATE:
      return dateConvert + " " + timeConvert;
    default:
      return dateConvert;
  }
}

export function genderTimeCount(timeNumber) {
  var now = moment(new Date()); //todays date
  var myTime = moment.unix(timeNumber);
  var duration = now.diff(myTime);
  if (duration < 60000) {
    return "now";
  } else if (duration > 60000 && duration < 3600000) {
    return now.diff(myTime, "minutes") + " minutes";
  } else if (duration > 3600000 && duration < 86400000) {
    return now.diff(myTime, "hours") + " hours";
  } else if (duration > 86400000 && duration < 604800000) {
    return now.diff(myTime, "days") + " days";
  } else if (duration > 604800000) {
    return moment.unix(timeNumber).format(DATE_UTC_FORMAT);
  } else {
    return moment.unix(timeNumber).format(DATE_UTC_FORMAT);
  }
}

export function formatCommaNumber(num, fix) {
  if (!num) return 0;
  let p = num.toFixed(fix).split(".");
  const fixValue = fix ? "." + p[1] : "";
  return (
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") + fixValue
  );
}

export function convertSalePrice(sale) {
  if (!sale) return 0;
  return formatCommaNumber(Math.round((sale * 70) / 100));
}

export const onRedirect = path => {
  browserHistory.push(path);
};

export const getTypeTravel = type => {
  return type === 1 ? "Hoạt động trải nghiệm" : "Ăn uống";
};

export const disabledDate = current => {
  return current && current < moment().endOf("day");
};

export const shuffleArray = array => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
