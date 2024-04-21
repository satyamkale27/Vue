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
    // if data is created then only created() function will be called no matter it is assigned or not to component //
  },
  beforeMount() {
    console.log("BeforeMount() function called", this.$el);
  },
  mounted() {
    console.log("mounted() function called", this.$el);
    // if the data is assigned to component then only mounted() function will be called
  },
});
vm.mount("#app");
// mounting seprately to look clean and easy to read //
