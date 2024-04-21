let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!",
    };
  },
  beforeCreate() {
    console.log("BeforeCreate() function clalled", this.message);
  },
  created() {
    console.log("Created() function called", this.message);
  },
  beforeMount() {
    console.log("BeforeMount() function called", this.$el);
  },
  mounted() {
    console.log("mounted() function called", this.$el);
  },
});
vm.mount("#app");
// mounting seprately to look clean and easy to read //
