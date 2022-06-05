const testCases = [1234, 1243, 1423, 4123, 1324, 1342, 1432, 4132, 3124, 3142, 3412, 4312, 2134, 2143, 2413, 4213, 2314, 2341, 2431, 4231, 3214, 3241, 3421, 4321];

export function encode(groups, matchWinners) {
  let encoded = "";

  groups.forEach(group => {
    let order = Number([group[0][1], group[1][1], group[2][1], group[3][1]].join(""));

    testCases.forEach((perm, i) => {
      if(order === perm) {
        let newLetter = String.fromCharCode(97 + i);

        encoded += newLetter;
      }
    });
  });

  let finalWinner = [matchWinners[14]];

  let finalMatch = [
    matchWinners[12], matchWinners[13],
  ];

  let semiFinals = [
    matchWinners[8], matchWinners[9],
    matchWinners[10], matchWinners[11],
  ];

  let quarterFinals =  [
    matchWinners[0], matchWinners[1],
    matchWinners[2], matchWinners[3],
    matchWinners[4], matchWinners[5],
    matchWinners[6], matchWinners[7],
  ];

  let roundSixteen = [
    groups[0][0][0], groups[1][1][0],
    groups[2][0][0], groups[3][1][0],
    groups[3][0][0], groups[2][1][0],
    groups[1][0][0], groups[0][1][0],
    groups[4][0][0], groups[5][1][0],
    groups[6][0][0], groups[7][1][0],
    groups[5][0][0], groups[4][1][0],
    groups[7][0][0], groups[6][1][0],
  ];

  const makeBinary = (wins, matches) => {
    let zeros = Array.from("0".repeat(matches.length));

    wins.forEach((outside, i) => {
      matches.forEach((inside, j) => {
        if(inside === outside) {
          zeros[j] = "1";
        }
      });
    });

    return zeros.join("");
  }

  let binOne = makeBinary(finalWinner, finalMatch);
  let binTwo = makeBinary(finalMatch, semiFinals);
  let binTre = makeBinary(semiFinals, quarterFinals);
  let binFur = makeBinary(quarterFinals, roundSixteen);

  let binary = binFur + binTre + binTwo + binOne + "10";

  let hex = parseInt(binary, 2).toString(16);

  encoded += hex;
    
  return encoded;
}

const groupA = [
  ["Qatar", 1],
  ["Ecuador", 2],
  ["Senegal", 3],
  ["Netherlands", 4],
];
const groupB = [
  ["England", 1],
  ["Iran", 2],
  ["USA", 3],
  ["Wales", 4],
//["Ukraine", 4],
//["Scotland", 4],
];
const groupC = [
  ["Argentina", 1],
  ["Saudi Arabia", 2],
  ["Mexico", 3],
  ["Poland", 4],
];
const groupD = [
  ["France", 1],
  ["AUS / UAE / PER", 2],
//["Australia", 2],
//["UAE", 2],
//["Peru", 2],
  ["Denmark", 3],
  ["Tunisia", 4],
];
const groupE = [
  ["Spain", 1],
  ["CRC/NZ", 2],
//["Costa Rica", 2],
//["New Zealand", 2],
  ["Germany", 3],
  ["Japan", 4],
];
const groupF = [
  ["Belgium", 1],
  ["Canada", 2],
  ["Morocco", 3],
  ["Croatia", 4],
];
const groupG = [
  ["Brazil", 1],
  ["Serbia", 2],
  ["Switzerland", 3],
  ["Cameroon", 4],
];
const groupH = [
  ["Portugal", 1],
  ["Ghana", 2],
  ["Uruguay", 3],
  ["South Korea", 4],
];
const groupBase = [
  groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH
];

export function decode(shareCode) {
  let decoded = [];
  
  let groupPart = shareCode.substring(0, 8);

  let testCaseIndexList = [];

  groupPart.split("").forEach((letter, i) => {
    testCaseIndexList.push(letter.charCodeAt(0) - 96);
  });

  let newTestCases = [];

  testCaseIndexList.forEach(index => {
    newTestCases.push(testCases[index - 1]);
  });

  let newGroups = [];

  groupBase.forEach((group, i) => {
    let testCase = newTestCases[i].toString().split("");

    let newGroup = [];

    testCase.forEach((test, j) => {
      let index = Number(testCase[j]) - 1;
      

      newGroup.push(groupBase[i][index]);
    });

    newGroups.push(newGroup);
  });

  let newRoundSixteen = [
    newGroups[0][0][0], newGroups[1][1][0],
    newGroups[2][0][0], newGroups[3][1][0],
    newGroups[3][0][0], newGroups[2][1][0],
    newGroups[1][0][0], newGroups[0][1][0],
    newGroups[4][0][0], newGroups[5][1][0],
    newGroups[6][0][0], newGroups[7][1][0],
    newGroups[5][0][0], newGroups[4][1][0],
    newGroups[7][0][0], newGroups[6][1][0]
  ];

  let matchesPart = shareCode.substring(8);

  let toBin = parseInt(matchesPart, 16).toString(2).padStart(32, "0");

  let sixteenResults = toBin.substring(0, 16).split("");
  let quarterResults = toBin.substring(16, 24).split("");
  let semiResults = toBin.substring(24, 28).split("");
  let finalResult = toBin.substring(28, 30).split("");

  let sixteenWinners = [];

  newRoundSixteen.forEach((team, i) => {
    if(sixteenResults[i] === "1") {
      sixteenWinners.push(team);
    }
  });

  let quartWinners = [];

  sixteenWinners.forEach((team, i) => {
    if(quarterResults[i] === "1") {
      quartWinners.push(team);
    }
  });

  quartWinners = [quartWinners[2], quartWinners[0], quartWinners[3], quartWinners[1]]

  let semiWinners = [];

  quartWinners.forEach((team, i) => {
    if(semiResults[i] === "1") {
      semiWinners.push(team);
    }
  });

  let finalWinner = [];

  semiWinners.forEach((team, i) => {
    if(finalResult[i] === "1") {
      finalWinner.push(team);
    }
  });

  let newMatchWinners = [...sixteenWinners, ...quartWinners, ...semiWinners, ...finalWinner];
  
  decoded.push(newGroups);
  decoded.push(newMatchWinners);
  
  return decoded;
}