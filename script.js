/* =======================================
   5kyu - Extract the domain name from a URL

   Inte så snyggt, använde regex på slutet för första if-satsen men kund gjort det på hela. Men kul! Första 5an
========================================= */

function domainName(url) {
  if (!url.match(/^(www|http)/)) {
    return url.split(".").slice(0, 1);
  }

  const filterHttp = url
    .split(/\/\/|www/)
    .slice(1)
    .join("");
  const filterUrl = filterHttp.split(".");
  if (filterUrl[0] === "") {
    return filterUrl[1];
  } else {
    return filterUrl[0];
  }
}

/* =======================================
    7kyu - Descending Order
========================================= */
function descendingOrder(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

/* =======================================
    6kyu - Most Consecutive Zeros of a Binary Number

    Galen uppgift med 3 steg, fått reduce-feber och kör det på allt
========================================= */
function maxConsecZeros(n) {
  const translate = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
    "Twenty",
  ];
  let binary = parseInt(n).toString(2);

  let solution = [...binary].reduce(
    (acc, curr) => {
      if (curr === "0") {
        acc.cons++;
        if (acc.cons > acc.max) acc.max = acc.cons;
      } else {
        acc.cons = 0;
      }
      return acc;
    },
    { cons: 0, max: 0 }
  ).max;
  return translate[solution];
}

/* =======================================
    7kyu   Friend or Foe?
========================================= */
function friend(friends) {
  return friends.filter((w) => w.length === 4);
}

/* =======================================
    7kyu  Isograms

    Återigen reduce-feber
========================================= */
function isIsogram(str) {
  let lowerStr = str.toLowerCase();
  let counter = [...lowerStr].reduce(
    (acc, curr) => {
      if (acc[curr] === undefined) {
        acc[curr] = 1;
        acc.unique++;
        acc.tot++;
      } else {
        acc[curr] += 1;
        acc.tot++;
      }
      return acc;
    },
    { unique: 0, tot: 0 }
  );
  if (counter.unique === counter.tot) {
    return true;
  } else {
    return false;
  }
}

/* =======================================
    6kyu  Detect Pangram

    Återigen reduce-feber
========================================= */

function isPangram(string) {
  const cleaned = string.toLowerCase().replace(/[^a-z]/g, "");
  let counter = [...cleaned].reduce(
    (acc, curr) => {
      if (acc[curr] === undefined) {
        acc[curr] = 1;
        acc.count++;
      } else {
        acc[curr] += 1;
      }
      return acc;
    },
    { count: 0 }
  ).count;
  if (counter === 26) {
    return true;
  } else return false;
}

/* =======================================
    6kyu  Who likes it?

    
========================================= */

function likes(names) {
  if (names.length === 0) return "no one likes this";
  if (names.length === 1) return `${names[0]} likes this`;
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  if (names.length === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if (names.length >= 4)
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

/* =======================================
    6kyu Tribonacci Sequence


========================================= */

function tribonacci(signature, n) {
  for (let i = 0; i < n; i++) {
    signature[i + 3] = signature[i] + signature[i + 1] + signature[i + 2];
  }
  return signature.slice(0, n);
}

/* =======================================
    6kyu Count the smiley faces!



========================================= */

function countSmileys(arr) {
  const regex = /^[:;][-~]?[)D]$/;

  const solution = arr.filter((face) => regex.test(face));
  return solution.length;
}
/* =======================================
    6kyu Duplicate Encoder



========================================= */

function duplicateEncode(word) {
  let str = word.toLowerCase();
  let solution = [];
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++)
      if (str[i] === str[j]) {
        count++;
      }
    if (count > 1) {
      solution.push(")");
    } else {
      solution.push("(");
    }
  }
  return solution.join("");
}

let text = "412*!-/++2haej asdj82_:;";
/* =======================================
    7kyu Printer Errors

========================================= */

function printerError(s) {
  let count = [...s].reduce(
    (acc, curr) => {
      if (curr.charCodeAt(0) - 96 > "a".charCodeAt(0) - 84) {
        acc.err++;
        acc.tot++;
      } else {
        acc.tot++;
      }
      return acc;
    },
    { err: 0, tot: 0 }
  );
  return `${count.err}/${count.tot}`;
}
