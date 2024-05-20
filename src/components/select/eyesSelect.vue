<template>
  <ul class="select__list">
    <li class="select__lst" v-for="(eyes, idx) in eyesLength" :key="idx">
      <div class="select__box">
        <input
          type="radio"
          class="select__input"
          :value="eyes"
          v-model="eyesData"
          @change="saveEyesInfo"
        />
        <label class="select__label" :class="`select__eyes-${eyes}`"></label>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'eyesSelect',
  data() {
    return {
      eyesLength: 13,
      eyesData: '',
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

<style>
.select__eyes-1{
  background:url('@/assets/imgs/eyes/eyes_1.png') no-repeat center / auto 100% 
}
.select__eyes-2{
  background:url('@/assets/imgs/eyes/eyes_2.png') no-repeat center / auto 100% 
}
.select__eyes-3{
  background:url('@/assets/imgs/eyes/eyes_3.png') no-repeat center / auto 100% 
}
.select__eyes-4{
  background:url('@/assets/imgs/eyes/eyes_4.png') no-repeat center / auto 100% 
}
.select__eyes-5{
  background:url('@/assets/imgs/eyes/eyes_5.png') no-repeat center / auto 100% 
}
.select__eyes-6{
  background:url('@/assets/imgs/eyes/eyes_6.png') no-repeat center / auto 100% 
}
.select__eyes-7{
  background:url('@/assets/imgs/eyes/eyes_7.png') no-repeat center / auto 100% 
}
.select__eyes-8{
  background:url('@/assets/imgs/eyes/eyes_8.png') no-repeat center / auto 100% 
}
.select__eyes-9{
  background:url('@/assets/imgs/eyes/eyes_9.png') no-repeat center / auto 100% 
}
.select__eyes-10{
  background:url('@/assets/imgs/eyes/eyes_10.png') no-repeat center / auto 100% 
}
.select__eyes-11{
  background:url('@/assets/imgs/eyes/eyes_11.png') no-repeat center / auto 100% 
}
.select__eyes-12{
  background:url('@/assets/imgs/eyes/eyes_12.png') no-repeat center / auto 100% 
}
.select__eyes-13{
  background:url('@/assets/imgs/eyes/eyes_13.png') no-repeat center / auto 100% 
}
</style>
