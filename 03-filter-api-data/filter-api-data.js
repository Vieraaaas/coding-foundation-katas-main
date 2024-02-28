function filterApiData(apiData, mandatoryKeys) {
  let result = [];
  for (const apiObject of apiData) {
    const objectArray = Object.keys(apiObject);
    let matches = 0;
    for (const entry of objectArray) {
      for (const keyName of mandatoryKeys) {
        if (entry === keyName) {
          matches += 1;
          if (matches === mandatoryKeys.length) {
            result.push(apiObject);
          }
        }
      }
    }
  }
  return result;
}
