Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  methods: {
    reset() {
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
    },
    async copy() {
      let text = `transform:${this.rotationStyles.transform};perspective:${this.perspectiveStyles.perspective};`;
      await navigator.clipboard.writeText(text);
    },
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
