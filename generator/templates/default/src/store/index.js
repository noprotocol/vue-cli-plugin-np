/* eslint-disable import/no-namespace */
import Vue from "vue";
import Vuex from "vuex";
import * as example from "./exampleStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { example }
});
