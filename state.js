import * as _ from "lodash";
const { createPath } = require("./common");

export const mapWritableState = (options) => {
  const object = {};

  const path = createPath(options.base, true);

  options.fields.forEach((field) => {
    object[field] = {
      get() {
        console.log("here", _.get(this.$store.state, path + field));

        return _.get(this.$store.state, path + field);
      },
      set(value) {
        this.$store.commit(options.base + "/" + field, value);
      },
    };
  });

  return object;
};
