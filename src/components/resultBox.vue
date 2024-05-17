<template>
  <div class="result">
    <div style="width: 100px; height: 100px; background: #fc0"></div>
  </div>
</template>

<script>
export default {
  name: 'resultBox',
  data() {
    return {
      face: '',
      eyes: '',
      nose: '',
      mouth: '',
      acc: [],
    };
  },
  computed: {
    getEmojiInfo() {
      return {
        faceInfo: this.$store.state.face,
        eyesInfo: this.$store.state.eyes,
        noseInfo: this.$store.state.nose,
        mouthInfo: this.$store.state.mouth,
        accInfo: this.$store.state.acc,
      };
    },
  },
  watch: {
    getEmojiInfo(value) {
      console.log(value);
      this.face = value.faceInfo
      this.eyes = value.eyesInfo
      this.nose = value.noseInfo
      this.mouth = value.mouthInfo
      this.acc = value.accInfo
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
</style>
