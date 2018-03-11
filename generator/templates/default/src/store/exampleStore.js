export const strict = true;

export const namespaced = true;

export const state = () => ({
  entities: {
    "1": {
      id: 1,
      message: "example"
    }
  }
});

export const getters = {
  byId: state => id => state.entities[id]
};

// export default { strict, state, getters };
