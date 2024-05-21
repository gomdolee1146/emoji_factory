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
      const length = { acc: 9 , eyes: 13, face: 5, mouth: 12 };
      return length[imgType]
    },
  },
};
