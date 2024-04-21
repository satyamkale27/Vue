Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  computed: {
    rotationStyles() {
      return {
        transform: `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`,
      };
    },
    perspectiveStyles() {
      return {
        perspective: this.perspective + "px",
      };
    },
  },
}).mount("#app");
