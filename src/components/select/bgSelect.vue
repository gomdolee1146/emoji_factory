<template>
  <div class="select__color">
    <input type="color" v-model="bgData" @change="saveBGInfo" />
  </div>
</template>

<script>
export default {
  name: 'bgSelect',
  data() {
    return {
      bgData: '',
    };
  },
  methods: {
    async saveBGInfo() {
      const bgData = this.bgData;
      await this.$store.dispatch('SAVE_BG_INFO', bgData);
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
  border: 1px solid #e0e0e0;
  border-radius: 16px;
}
</style>
