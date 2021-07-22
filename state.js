const _ = require("lodash");
const { createPath } = require("./common");

exports.mapWritableState = (options) => {
  const object = {};

  const path = createPath(options.base, true);

  options.fields.forEach((field) => {
    object[field] = {
      get() {
        return _.get(this.$store.state, path + field);
      },
      set(value) {
        this.$store.commit(options.base + "/" + field, value);
      },
    };
  });

  return object;
};
