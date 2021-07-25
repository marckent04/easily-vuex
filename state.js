const _ = require("lodash");
const { createPath } = require("./common");

exports.mapWritableState = (options) => {
  const object = {};

  const base = options.prop ? this[options.prop] : options.base 
  const path = createPath(base, true);

  options.fields.forEach((field) => {
    object[field] = {
      get() {
        return _.get(this.$store.state, path + field);
      },
      set(value) {
        this.$store.commit(base + "/" + field, value);
      },
    };
  });

  return object;
};
