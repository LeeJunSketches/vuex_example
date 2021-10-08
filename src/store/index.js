import { createStore } from "vuex";
import user from "./user";
import points from "./points";

export default createStore({ modules: { user, points } });
