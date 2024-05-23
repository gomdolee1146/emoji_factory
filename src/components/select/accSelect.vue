<template>
  <ul class="select__list">
    <li class="select__lst" v-for="(acc, idx) in accLength" :key="idx">
      <div class="select__box">
        <input
          type="checkbox"
          class="select__input"
          :value="acc"
          v-model="accData"
          @change="saveAccInfo"
        />
        <label class="select__label" :class="`select__acc-${acc}`"></label>
      </div>
    </li>
    <li class="select__lst">
      <div class="select__box" @click="resetAccData"></div>
    </li>
  </ul>
</template>

<script>
import { commonMixin } from '@/mixin/commonMixin';

export default {
  name: 'accSelect',
  mixins: [commonMixin],
  data() {
    return {
      accLength: null,
      accData: [],
    };
  },
  methods: {
    async saveAccInfo() {
      const accData = this.accData;
      await this.$store.dispatch('SAVE_ACC_INFO', accData);
    },
    async resetAccData(){
      await this.$store.dispatch('SAVE_ACC_INFO', '');
    }
  },
  mounted() {
    this.accLength = this.getImageLength('acc');
  },
};
</script>

<style>
.select__acc-1 {
  background: url('@/assets/imgs/acc/acc_1.png') no-repeat center / auto 100%;
}
.select__acc-2 {
  background: url('@/assets/imgs/acc/acc_2.png') no-repeat center / auto 100%;
}
.select__acc-3 {
  background: url('@/assets/imgs/acc/acc_3.png') no-repeat center / auto 100%;
}
.select__acc-4 {
  background: url('@/assets/imgs/acc/acc_4.png') no-repeat center / auto 100%;
}
.select__acc-5 {
  background: url('@/assets/imgs/acc/acc_5.png') no-repeat center / auto 100%;
}
.select__acc-6 {
  background: url('@/assets/imgs/acc/acc_6.png') no-repeat center / auto 100%;
}
.select__acc-7 {
  background: url('@/assets/imgs/acc/acc_7.png') no-repeat center / auto 100%;
}
.select__acc-8 {
  background: url('@/assets/imgs/acc/acc_8.png') no-repeat center / auto 100%;
}
</style>
