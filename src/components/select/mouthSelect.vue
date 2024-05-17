<template>
  <ul class="select__list">
    <li class="select__lst" v-for="(select, idx) in selectList" :key="idx">
      <div class="select__box">
        <input
          type="radio"
          class="select__input"
          :value="select"
          v-model="mouthData"
          @change="saveMouthInfo"
        />
        <label class="select__label">mouth {{ select }}</label>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'mouthSelect',
  data() {
    return {
      mouthData: '',
      selectList: ['1', '2', '3', '4'],
    };
  },
  methods: {
    async saveMouthInfo() {
      const mouthData = this.mouthData;
      await this.$store.dispatch('SAVE_MOUTH_INFO', mouthData);
    },
  },
};
</script>

<style></style>
