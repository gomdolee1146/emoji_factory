<template>
  <ul class="select__list">
    <li class="select__lst" v-for="(select, idx) in selectList" :key="idx">
      <div class="select__box">
        <input
          type="radio"
          class="select__input"
          :value="select"
          v-model="noseData"
          @change="saveNoseInfo"
        />
        <label class="select__label">nose {{ select }}</label>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'noseSelect',
  data() {
    return {
      noseData: '',
      selectList: ['1', '2', '3', '4'],
    };
  },
  methods: {
    async saveNoseInfo() {
      const noseData = this.noseData;
      await this.$store.dispatch('SAVE_NOSE_INFO', noseData);
    },
  },
};
</script>

<style></style>
