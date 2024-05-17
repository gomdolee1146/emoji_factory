<template>
  <ul class="select__list">
    <li class="select__cir" v-for="(select, idx) in selectList" :key="idx">
      <div class="select__circle">
        <input
          type="radio"
          class="select__input"
          :value="select"
          v-model="faceData"
          @change="saveFaceInfo"
        />
        <label class="select__label">{{ select }}</label>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'faceSelect',
  data() {
    return {
      faceData: '',
      selectList: ['1', '2', '3', '4'],
    };
  },
  methods: {
    async saveFaceInfo() {
      const faceData = this.faceData;
      await this.$store.dispatch('SAVE_FACE_INFO', faceData);
    },
  },
};
</script>

<style>
.select__cir {
  width: 40px;
  height: 40px;
  margin-right: 8px;
}
.select__circle {
  position: relative;
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  border-radius: 50%;
}
</style>
