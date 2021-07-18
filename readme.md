## What problem does this solve?

-   form management with vuex

## fonctions disponibles
- mapWritableState: map your store to your component
- writeMutations: Generate your mutations

## Exemples

### WriteMutations
```javascript

// mutations.js
import { writeMutations } from "easily-vuex"
export default {
    ...writeMutations({
        fields: [
        "name",
        "firstname",
        "email";
        "password"
        ],
  }),
}
```

instead of

```javascript
// mutations.js
export default {
    name: (state, value) {
        state.name = value;
    },
    firstname: (state, value) {
        state.firstname = value;
    },
    email: (state, value) {
        state.email = value;
    },
    password: (state, value) {
        state.password = value;
    }
}
```

___

### MapWritableState

```javascript
// example.vue
import { mapWritableState } from "easily-vuex"

export default {
    computed: {
        ...mapWritableState({
            base: "path/module",
            fields: ["name", "firstname"],
        }),
    }
}
```

instead of

```javascript
// example.vue
  computed: {
    name: {
      get() {
        return this.$store.getters["name"];
      },
      set(val: string) {
        this.$store.commit("path/module/name", val);
      },
    },
    firstname: {
      get() {
             return this.$store.getters["firstname"];
      },
      set(val: string) {
        this.$store.commit("path/module/name", val);
      },
    },
  }

```
