const vm = Vue.createApp({
  data() {
    return {
      firstName: "john",
      lastName: "doe",
      url: "https://google.com",
      raw_url: '<a href="https://google.com">Google</a>',
      age: 20,
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
    Increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      console.log(msg);
      this.lastName = event.target.value;
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
