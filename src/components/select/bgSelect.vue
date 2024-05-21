<template>
  <div class="select__color">
    <input type="color" v-model="BgData" @change="saveBGInfo" />
  </div>
</template>

<script>
export default {
  name: 'bgSelect',
  data() {
    return {
      BgData: '',
    };
  },
  methods: {
    async saveBGInfo() {
      const BgData = this.BgData;
      await this.$store.dispatch('SAVE_BG_INFO', BgData);
    },
  },
};
</script>

<style>
.select__color {
  width: 100%;
  padding: 20px;
}
input[type='color'] {
  width: 100%;
  height: 80px;
  border: none;
  border-radius: 16px;
  background-color: transparent;
}
input[type='color']::-webkit-color-swatch {
  border: none;
  border-radius: 16px;
}
</style>
