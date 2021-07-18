const _ = require("lodash");
const { createPath } = require("./common");

export const writeMutations = (options) => {
  const obj = {};

  options.fields.forEach((field) => {
    obj[field] = (state, value) => {
      _.set(state, createPath(field), value);
    };
  });

  return obj;
};

export const writeAllMutations = () => {};
