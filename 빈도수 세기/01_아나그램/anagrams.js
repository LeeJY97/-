function validAnagram(standardStr, compareStr) {
  const standardCount = {};

  if (standardStr.length !== compareStr.length) return false;

  for (const c of standardStr) {
    standardCount[c] = !standardCount[c] ? 1 : standardCount[c] + 1;
  }

  console.log('standardCount', standardCount)

  for (const c of compareStr) {
    if (!standardCount[c]) return false;
    standardCount[c] -= 1;
  }

  return true;
}

// validAnagram('', '') // true
// validAnagram('anagram', 'nagaram') // true
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
// validAnagram('aaz', 'zza') // false
// validAnagram("rat", "car")  // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false