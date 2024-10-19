function validAnagram(standardStr, compareStr) {
  const standardCount = {};

  if (standardStr.length !== compareStr.length) return false;

  for (const c of standardStr) {
    standardCount[c] = !standardCount[c] ? 1 : standardCount[c] + 1;
  }

  for (const c of compareStr) {
    if (!standardCount[c]) return false;
    standardCount[c] -= 1;
  }

  return true;
}

function validAnagram(standardStr, compareStr) {
  const standardCount = {};

  if (standardStr.length !== compareStr.length) return false;

  for (const c of standardStr) {
    standardCount[c] = !standardCount[c] ? 1 : standardCount[c] + 1;
  }

  for (const c of compareStr) {
    if (!standardCount[c]) return false;
    standardCount[c] -= 1;
  }

  return true;
}

const a = validAnagram('', '') // true
const b = validAnagram('anagram', 'nagaram') // true
const c = validAnagram('qwerty', 'qeywrt') // true
const d = validAnagram('texttwisttime', 'timetwisttext') // true
const e = validAnagram('aaz', 'zza') // false
const f = validAnagram("rat", "car")  // false
const g = validAnagram('awesome', 'awesom') // false
const h = validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false

console.log('a', a)
console.log('b', b)
console.log('c', c)
console.log('d', d)
console.log('e', e)
console.log('f', f)
console.log('g', g)
console.log('h', h)