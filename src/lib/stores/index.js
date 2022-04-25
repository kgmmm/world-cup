import { writable, derived } from "svelte/store";

export const teams = writable([
  "Qatar",
  "Ecuador",
  "Senegal",
  "Netherlands",
  "England",
  "Iran",
  "USA",
  "WAL/UKR/SCO",
  "Argentina",
  "Saudi Arabia",
  "Mexico",
  "Poland",
  "France",
  "AUS/UAE/PER",
  "Denmark",
  "Tunisia",
  "Spain",
  "CRC/NZ",
  "Germany",
  "Japan",
  "Belgium",
  "Canada",
  "Morocco",
  "Croatia",
  "Brazil",
  "Serbia",
  "Switzerland",
  "Cameroon",
  "Portugal",
  "Ghana",
  "Uruguay",
  "South Korea",
]);

export const codes = writable([
  "QA",
  "EC",
  "SN",
  "NL",
  "GB-ENG",
  "IR",
  "US",
  "TBD",
  "AR",
  "SA",
  "MX",
  "PL",
  "FR",
  "TBD",
  "DK",
  "TN",
  "ES",
  "TBD",
  "DE",
  "JP",
  "BE",
  "CA",
  "MA",
  "HR",
  "BR",
  "RS",
  "CH",
  "CM",
  "PT",
  "GH",
  "UY",
  "KR",
]);

export const codeMap = derived(([teams, codes]), ([teams, codes]) => {
  let newMap = new Map();

  for(let i = 0; i < teams.length; i++){
    newMap.set(teams[i], codes[i]);
  };

  return newMap;
});

export const groupA = writable([
  ["Qatar", 1],
  ["Ecuador", 2],
  ["Senegal", 3],
  ["Netherlands", 4],
]);
export const groupB = writable([
  ["England", 1],
  ["Iran", 2],
  ["USA", 3],
  ["WAL/UKR/SCO", 4],
]);
export const groupC = writable([
  ["Argentina", 1],
  ["Saudi Arabia", 2],
  ["Mexico", 3],
  ["Poland", 4],
]);
export const groupD = writable([
  ["France", 1],
  ["AUS/UAE/PER", 2],
  ["Denmark", 3],
  ["Tunisia", 4],
]);
export const groupE = writable([
  ["Spain", 1],
  ["CRC/NZ", 2],
  ["Germany", 3],
  ["Japan", 4],
]);
export const groupF = writable([
  ["Belgium", 1],
  ["Canada", 2],
  ["Morocco", 3],
  ["Croatia", 4],
]);
export const groupG = writable([
  ["Brazil", 1],
  ["Serbia", 2],
  ["Switzerland", 3],
  ["Cameroon", 4],
]);
export const groupH = writable([
  ["Portugal", 1],
  ["Ghana", 2],
  ["Uruguay", 3],
  ["South Korea", 4],
]);

export const groups = [
  groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH
];

export const matchWinners = writable([
  "", // 49 0
  "", // 50 1
  "", // 51 2
  "", // 52 3
  "", // 53 4
  "", // 54 5
  "", // 55 6
  "", // 56 7
  "", // 57 8
  "", // 58 9
  "", // 59 10
  "", // 60 11
  "", // 61 12
  "", // 62 13
  "", // 63 14
]);

export const roundSixteen = derived(([groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH]), ([groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH]) => {
  return [
    [groupA[0][0], groupB[1][0]],
    [groupC[0][0], groupD[1][0]],
    [groupD[0][0], groupC[1][0]],
    [groupB[0][0], groupA[1][0]],
    [groupE[0][0], groupF[1][0]],
    [groupG[0][0], groupH[1][0]],
    [groupF[0][0], groupE[1][0]],
    [groupH[0][0], groupG[1][0]]
  ];
});

export const quarterFinals = derived((matchWinners), (matchWinners) => {
  return [
    [matchWinners[4], matchWinners[5]],
    [matchWinners[0], matchWinners[1]],
    [matchWinners[6], matchWinners[7]],
    [matchWinners[2], matchWinners[3]]
  ];
});

export const semiFinals = derived((matchWinners), (matchWinners) => {
  return [
    [matchWinners[8], matchWinners[9]],
    [matchWinners[10], matchWinners[11]]
  ];
});

export const finalMatch = derived((matchWinners), (matchWinners) => {
  return [matchWinners[12], matchWinners[13]];
});

export const matches = derived(([roundSixteen, quarterFinals, semiFinals, finalMatch]), ([roundSixteen, quarterFinals, semiFinals, finalMatch]) => {
  return {
    "roundSixteen[0]": roundSixteen[0],
    "roundSixteen[1]": roundSixteen[1],
    "roundSixteen[2]": roundSixteen[2],
    "roundSixteen[3]": roundSixteen[3],
    "roundSixteen[4]": roundSixteen[4],
    "roundSixteen[5]": roundSixteen[5],
    "roundSixteen[6]": roundSixteen[6],
    "roundSixteen[7]": roundSixteen[7],
    "quarterFinals[0]": quarterFinals[0],
    "quarterFinals[1]": quarterFinals[1],
    "quarterFinals[2]": quarterFinals[2],
    "quarterFinals[3]": quarterFinals[3],
    "semiFinals[0]": semiFinals[0],
    "semiFinals[1]": semiFinals[1],
    "finalMatch[0]": finalMatch
  }
});

export const progress = writable([
  [
    "World Cup Predictor",
    "groupA",
    "groupB",
    "groupC",
    "groupD",
    "groupE",
    "groupF",
    "groupG",
    "groupH",
    "roundSixteen[0]",
    "roundSixteen[1]",
    "roundSixteen[2]",
    "roundSixteen[3]",
    "roundSixteen[4]",
    "roundSixteen[5]",
    "roundSixteen[6]",
    "roundSixteen[7]",
    "quarterFinals[0]",
    "quarterFinals[1]",
    "quarterFinals[2]",
    "quarterFinals[3]",
    "semiFinals[0]",
    "semiFinals[1]",
    "finalMatch[0]",
    "Your winner is...",
  ],
  0
]);