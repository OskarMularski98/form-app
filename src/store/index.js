import Vue from "vue";
import Vuex from "vuex";
import moduleForm from "@/store/modules/moduleForm";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    moduleForm,
  },
});
