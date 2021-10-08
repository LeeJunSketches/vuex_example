<template>
  <main>
    <div class="wrapper">
      <div class="item">
        <span>Username:</span>
        <span> {{ username }}</span>
      </div>
      <div class="item">
        <span>Age:</span>
        <span> {{ age }}</span>
      </div>
    </div>

    <div class="wrapper">
      <div class="item">
        <span>Points:</span>
        <span> {{ getPoints }}</span>
      </div>
    </div>

    <div class="wrapper">
      <input type="text" placeholder="username" v-model="inputName" />
      <input type="text" placeholder="age" v-model="inputAge" />
      <input type="button" value="SUBMIT" class="button" @click="submit" />
    </div>

    <div class="wrapper">
      <div class="item">
        <span>Points:</span>

        <input type="button" value="-" class="button" @click="setPoint()" />
        <input
          type="button"
          value="+"
          class="button"
          @click="setPoint('add')"
        />
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  data: () => ({
    inputName: "",
    inputAge: 0,
  }),
  computed: {
    ...mapGetters("user", ["getAge"]),
    ...mapGetters("points", ["getPoints"]),
    username() {
      return this.$store.getters["user/getUsername"];
    },
    age() {
      return this.getAge;
    },
  },
  methods: {
    ...mapActions("user", { setUserAge: "setAge" }),
    ...mapActions("points", ["addPoint", "removePoint"]),
    setName() {
      this.$store.dispatch("user/setUsername", this.inputName);
    },
    setAge() {
      this.setUserAge(this.inputAge);
    },
    setPoint(add) {
      if (add) this.addPoint();
      else this.removePoint();
    },

    submit() {
      this.setName();
      this.setAge();
    },
  },
};
</script>

<style>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #a2d2ff;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
}
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fef9ef;
  padding: 10px;
  width: 200px;
  border-radius: 10px;
}

.item {
  display: grid;
  grid-template-columns: 100px 1fr;
  width: 100%;
}

.wrapper + .wrapper {
  margin-top: 10px;
}

input {
  padding: 5px;
  border-radius: 5px;
  border: 2px solid black;
}

input + input {
  margin-top: 5px;
}

.button:hover {
  cursor: pointer;
}

.button:active {
  color: white;
  background: black;
}

.wrapper:last-child .item {
  grid-template-columns: 1fr 30px 30px;
  column-gap: 10px;
  align-items: center;
}

.wrapper:last-child .item .button {
  margin: 0;
}
</style>
