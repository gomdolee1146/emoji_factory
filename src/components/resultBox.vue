<template>
  <div class="result">
    <div class="result__wrap">
      <div class="result__layer" :class="`select__face-${getEmojiInfo.faceInfo}`"></div>
      <div class="result__layer" :class="`select__eyes-${getEmojiInfo.eyesInfo}`"></div>
      <div class="result__layer" :class="`select__mouth-${getEmojiInfo.mouthInfo}`"></div>
      <div class="result__layer" :class="`select__acc-${acc}`" v-for="acc in getEmojiInfo.accInfo" :key="acc"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resultBox',
  computed: {
    getEmojiInfo() {
      return {
        faceInfo: this.$store.state.face,
        eyesInfo: this.$store.state.eyes,
        mouthInfo: this.$store.state.mouth,
        accInfo: this.$store.state.acc,
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
}
.result__wrap {
  position: relative;
  width: 150px;
  height: 150px;
  border: 1px solid #fc0;
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
