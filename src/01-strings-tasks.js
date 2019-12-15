function concatenateStrings(value1, value2) {
  return value1 + value2;
}
function getStringLength(value) {
  return value.length;
}
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}
function extractNameFromTemplate(value) {
  return value.split(', ')[1].slice(0, -1);
}
function getFirstChar(value) {
  return value[0];
}
function removeLeadingAndTrailingWhitespaces(value) {
  return value.replace(/^\s+|\s+$/g, '');
}
function repeatString(value, count) {
  let result = '';
  for (let i = 0; i < count; i += 1) {
    result += value;
  }
  return result;
}
function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}
function unbracketTag(str) {
  return str.slice(1, -1);
}
function convertToUpperCase(str) {
  return str.toUpperCase();
}
function extractEmails(str) {
  return str.split(';');
}
function getRectangleString(width, height) {
  let result = '';

  for (let i = 0; i < height; i += 1) {
    for (let j = 0; j < width; j += 1) {
      if (i === 0 && j === 0) result += '┌';
      if (i === 0 && j !== 0 && j !== width - 1) result += '─';
      if (i === 0 && j === width - 1) result += '┐\n';

      if (i !== 0 && i !== height - 1 && j === 0) result += '│';
      if (i !== 0 && i !== height - 1 && j === width - 1) result += '│\n';
      if (i !== 0 && i !== height - 1 && j !== 0 && j !== width - 1) {
        result += ' ';
      }

      if (i === height - 1 && j === 0) result += '└';
      if (i === height - 1 && j !== 0 && j !== width - 1) result += '─';
      if (i === height - 1 && j === width - 1) result += '┘\n';
    }
  }
  return result;
}
function encodeToRot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const cipher = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';

  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];

    if (alphabet.includes(char)) {
      const charIndex = alphabet.indexOf(char);
      result += cipher[charIndex];
    } else {
      result += char;
    }
  }
  return result;
}
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}
function getCardId(value) {
  const DECK = [
    'A♣',
    '2♣',
    '3♣',
    '4♣',
    '5♣',
    '6♣',
    '7♣',
    '8♣',
    '9♣',
    '10♣',
    'J♣',
    'Q♣',
    'K♣',
    'A♦',
    '2♦',
    '3♦',
    '4♦',
    '5♦',
    '6♦',
    '7♦',
    '8♦',
    '9♦',
    '10♦',
    'J♦',
    'Q♦',
    'K♦',
    'A♥',
    '2♥',
    '3♥',
    '4♥',
    '5♥',
    '6♥',
    '7♥',
    '8♥',
    '9♥',
    '10♥',
    'J♥',
    'Q♥',
    'K♥',
    'A♠',
    '2♠',
    '3♠',
    '4♠',
    '5♠',
    '6♠',
    '7♠',
    '8♠',
    '9♠',
    '10♠',
    'J♠',
    'Q♠',
    'K♠',
  ];
  return DECK.indexOf(value);
}

module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
