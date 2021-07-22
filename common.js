exports.createPath = (path, isModule = false) => {
  const regex = new RegExp("/", "gi");
  let truePath = path.replace(regex, ".");
  if (isModule) {
    truePath += ".";
  }
  return truePath;
};
