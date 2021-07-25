const _ = require("lodash");
const { createPath } = require("./common");

exports.mapWritableState = (options) => {
  const object = {};

  options.fields.forEach((field) => {
    object[field] = {
      get() {
        const base = options.prop ? this[options.prop] : options.base;
        const path = base ?  createPath(base, true) : "";
        return _.get(this.$store.state, path + field);
      },
      set(value) {
        const base = options.prop ? this[options.prop] : options.base;
        this.$store.commit(base + "/" + field, value);
      },
    };
  });

  return object;
};
