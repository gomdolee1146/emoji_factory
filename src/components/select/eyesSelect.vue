<template>
  <ul class="select__list">
    <li class="select__lst" v-for="(select, idx) in selectList" :key="idx">
      <div class="select__box">
        <input
          type="radio"
          class="select__input"
          :value="select"
          v-model="eyesData"
          @change="saveEyesInfo"
        />
        <label class="select__label">eyes {{ select }}</label>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'eyesSelect',
  data() {
    return {
      eyesData: '',
      selectList: ['1', '2', '3', '4'],
    };
  },
  methods: {
    async saveEyesInfo() {
      const eyesData = this.eyesData;
      await this.$store.dispatch('SAVE_EYES_INFO', eyesData);
    },
  },
};
</script>

<style></style>
