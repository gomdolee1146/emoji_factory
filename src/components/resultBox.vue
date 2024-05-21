<template>
  <div class="result">
    <div class="result__wrap">
      <div class="result__bg">{{ getEmojiInfo.bgInfo }}</div>
      <div class="result__box">
        <div class="result__layer" :class="`select__face-${getEmojiInfo.faceInfo}`"></div>
        <div class="result__layer" :class="`select__eyes-${getEmojiInfo.eyesInfo}`"></div>
        <div
          class="result__layer"
          :class="`select__mouth-${getEmojiInfo.mouthInfo}`"
        ></div>
        <div
          class="result__layer"
          :class="`select__acc-${acc}`"
          v-for="acc in getEmojiInfo.accInfo"
          :key="acc"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resultBox',
  computed: {
    getEmojiInfo() {
      return {
        faceInfo: this.$store.state.face ? this.$store.state.face : 1,
        eyesInfo: this.$store.state.eyes,
        mouthInfo: this.$store.state.mouth,
        accInfo: this.$store.state.acc,
        bgInfo: this.$store.state.bg,
      };
    },
  },
};
</script>

<style>
.result {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.result__bg{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform:translate(-50%, -50%);
  z-index:0; 
}
.result__box {
  position: relative;
  width: 150px;
  height: 150px;
  z-index: 1;
}
.result__layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
