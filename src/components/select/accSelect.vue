<template>
  <ul class="select__list">
    <li class="select__lst" v-for="(select, idx) in selectList" :key="idx">
      <div class="select__box">
        <input
          type="checkbox"
          class="select__input"
          :value="select"
          v-model="accData"
          @change="saveAccInfo"
        />
        <label class="select__label">acc {{ select }}</label>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'accSelect',
  data() {
    return {
      accData: [],
      selectList: ['1', '2', '3', '4'],
    };
  },
  methods: {
    async saveAccInfo() {
      const accData = this.accData;
      await this.$store.dispatch('SAVE_ACC_INFO', accData);
    },
  },
};
</script>

<style></style>
