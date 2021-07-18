exports.createPath = (path, isModule = false) => {
  let truePath = path.replace(/\//gi, ".");
  if (isModule) {
    truePath += ".";
  }
  return truePath;
};
