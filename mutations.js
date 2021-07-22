const _ = require("lodash");
const { createPath } = require("./common");

exports.writeMutations = (options) => {
  const obj = {};

  options.fields.forEach((field) => {
    obj[field] = (state, value) => {
      _.set(state, createPath(field), value);
    };
  });

  return obj;
};

// exports.writeAllMutations = () => {};
