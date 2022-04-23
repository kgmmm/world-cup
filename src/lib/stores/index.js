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

export const groupA = derived((teams), (teams) => {
  let group = [];

  for (let i = 0; i < 4; i++) {
    group.push(teams[i]);
  }

  return group;
});

export const groupB = derived((teams), (teams) => {
  let group = [];

  for (let i = 4; i < 8; i++) {
    group.push(teams[i]);
  }

  return group;
});

export const groupC = derived((teams), (teams) => {
  let group = [];

  for (let i = 8; i < 12; i++) {
    group.push(teams[i]);
  }

  return group;
});

export const groupD = derived((teams), (teams) => {
  let group = [];

  for (let i = 12; i < 16; i++) {
    group.push(teams[i]);
  }

  return group;
});

export const groupE = derived((teams), (teams) => {
  let group = [];

  for (let i = 16; i < 20; i++) {
    group.push(teams[i]);
  }

  return group;
});

export const groupF = derived((teams), (teams) => {
  let group = [];

  for (let i = 20; i < 24; i++) {
    group.push(teams[i]);
  }

  return group;
});

export const groupG = derived((teams), (teams) => {
  let group = [];

  for (let i = 24; i < 28; i++) {
    group.push(teams[i]);
  }

  return group;
});

export const groupH = derived((teams), (teams) => {
  let group = [];

  for (let i = 28; i < 32; i++) {
    group.push(teams[i]);
  }

  return group;
});

export const groups = derived(([groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH]), ([groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH]) => {
  return [groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH];
});

export const roundSixteen = derived(([groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH]), ([groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH]) => {
  return [
    [groupA[0], groupB[1], "winner"],
    [groupC[0], groupD[1], "winner"],
    [groupD[0], groupC[1], "winner"],
    [groupB[0], groupA[1], "winner"],
    [groupE[0], groupF[1], "winner"],
    [groupG[0], groupH[1], "winner"],
    [groupF[0], groupE[1], "winner"],
    [groupH[1], groupG[1], "winner"]
  ];
});

export const quarterFinals = derived((roundSixteen), (roundSixteen) => {
  return [
    [roundSixteen[4][2], roundSixteen[5][2], "winner"],
    [roundSixteen[0][2], roundSixteen[1][2], "winner"],
    [roundSixteen[6][2], roundSixteen[7][2], "winner"],
    [roundSixteen[2][2], roundSixteen[3][2], "winner"]
  ];
});

export const semiFinals = derived((quarterFinals), (quarterFinals) => {
  return [
    [quarterFinals[1][2], quarterFinals[0][2], "winner"],
    [quarterFinals[3][2], quarterFinals[2][2], "winner"]
  ];
});

export const finalMatch = derived((semiFinals), (semiFinals) => {
  return [semiFinals[0][2], semiFinals[1][2]];
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
    "finalMatch[0]": finalMatch[0]
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
    "endscreen",
  ],
  0
]);