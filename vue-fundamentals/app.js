const vm = Vue.createApp({
  data() {
    return {
      firstName: "john",
      MiddleName: "",
      lastName: "doe",
      url: "https://google.com",
      raw_url: '<a href="https://google.com">Google</a>',
      age: 20,
    };
  },
  methods: {
    Increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      console.log(msg);
      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.MiddleName = event.target.value;
    },
  },
  computed: {
    fullName() {
      return `${this.firstName} ${
        this.MiddleName
      } ${this.lastName.toUpperCase()}`;
    },
  },
  watch: {
    age(newval, oldval) {
      setTimeout(() => {
        this.age = 20;
      }, 3000);
    },
  },
}).mount("#app");

setTimeout(() => {
  vm.firstName = "Bob";
}, 2000);

// Vue.createApp({
//   data() {
//     return {
//       firstName: "jane",
//       lastName: "doe",
//     };
//   },
// }).mount("#app2");
