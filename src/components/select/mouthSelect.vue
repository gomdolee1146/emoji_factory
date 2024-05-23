<template>
  <ul class="select__list">
    <li class="select__lst" v-for="(mouth, idx) in mouthLength" :key="idx">
      <div class="select__box">
        <input
          type="radio"
          class="select__input"
          :value="mouth"
          v-model="mouthData"
          @change="saveMouthInfo"
        />
        <label class="select__label" :class="`select__mouth-${mouth}`"></label>
      </div>
    </li>
  </ul>
</template>

<script>
import { commonMixin } from '@/mixin/commonMixin';
export default {
  name: 'mouthSelect',
  mixins: [commonMixin],
  data() {
    return {
      mouthLength: null,
      mouthData: '',
    };
  },
  methods: {
    async saveMouthInfo() {
      const mouthData = this.mouthData;
      await this.$store.dispatch('SAVE_MOUTH_INFO', mouthData);
    },
    async resetMouthData(){
      await this.$store.dispatch('SAVE_MOUTH_INFO', '');
    }
  },
  mounted() {
    this.mouthLength = this.getImageLength('mouth');
  },
};
</script>

<style>
.select__mouth-1 {
  background: url('@/assets/imgs/mouth/mouth_1.png') no-repeat center / auto 100%;
}
.select__mouth-2 {
  background: url('@/assets/imgs/mouth/mouth_2.png') no-repeat center / auto 100%;
}
.select__mouth-3 {
  background: url('@/assets/imgs/mouth/mouth_3.png') no-repeat center / auto 100%;
}
.select__mouth-4 {
  background: url('@/assets/imgs/mouth/mouth_4.png') no-repeat center / auto 100%;
}
.select__mouth-5 {
  background: url('@/assets/imgs/mouth/mouth_5.png') no-repeat center / auto 100%;
}
.select__mouth-6 {
  background: url('@/assets/imgs/mouth/mouth_6.png') no-repeat center / auto 100%;
}
.select__mouth-7 {
  background: url('@/assets/imgs/mouth/mouth_7.png') no-repeat center / auto 100%;
}
.select__mouth-8 {
  background: url('@/assets/imgs/mouth/mouth_8.png') no-repeat center / auto 100%;
}
.select__mouth-9 {
  background: url('@/assets/imgs/mouth/mouth_9.png') no-repeat center / auto 100%;
}
.select__mouth-10 {
  background: url('@/assets/imgs/mouth/mouth_10.png') no-repeat center / auto 100%;
}
.select__mouth-11 {
  background: url('@/assets/imgs/mouth/mouth_11.png') no-repeat center / auto 100%;
}
.select__mouth-12 {
  background: url('@/assets/imgs/mouth/mouth_12.png') no-repeat center / auto 100%;
}
</style>
