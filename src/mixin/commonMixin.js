export const commonMixin = {
  methods: {
    getImageLength(imgType) {
      // const files = new Image();

      // let i = 0;
      // let isEnd = false;
      // while (!isEnd) {
      //   i++;
      //   files.src = require(`@/assets/imgs/${imgType}/${imgType}_${i}.png`);
      //   const checkFiles = files.complete;
      //   if (!checkFiles) {
      //     isEnd = true;
      //     return i;
      //   }
      // }
      const length = { acc: 9, eyes: 13, face: 5, mouth: 12 };
      return length[imgType];
    },
    getRandomNum(max) {
      return Math.floor(Math.random() * (max - 1)) + 1;
    },
    getRandomColor() {
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    },
    async getRandomEmoji() {
      const faceInfo = this.getRandomNum(this.getImageLength('face'));
      const eyesInfo = this.getRandomNum(this.getImageLength('eyes'));
      const mouthInfo = this.getRandomNum(this.getImageLength('mouth'));
      const accInfo = this.getRandomNum(this.getImageLength('acc'));
      const bgInfo = this.getRandomColor();

      await this.$store.dispatch('SAVE_FACE_INFO', faceInfo);
      await this.$store.dispatch('SAVE_EYES_INFO', eyesInfo);
      await this.$store.dispatch('SAVE_MOUTH_INFO', mouthInfo);
      await this.$store.dispatch('SAVE_ACC_INFO', accInfo);
      await this.$store.dispatch('SAVE_BG_INFO', bgInfo);

      this.randomData = {
        face: faceInfo,
        eyes: eyesInfo,
        mouth: mouthInfo,
        acc: accInfo,
        bg: bgInfo,
      };
    },
  },
};
