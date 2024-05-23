<template>
  <ul class="select__list">
    <li class="select__cir" v-for="(face, idx) in faceLength" :key="idx">
      <div class="select__circle">
        <input
          type="radio"
          class="select__input"
          :value="face"
          v-model="faceData"
          @change="saveFaceInfo"
        />
        <label class="select__label" :class="`circle__face-${face}`"></label>
      </div>
    </li>
  </ul>
</template>

<script>
import { commonMixin } from '@/mixin/commonMixin';
export default {
  name: 'faceSelect',
  mixins: [commonMixin],
  data() {
    return {
      faceLength: null,
      faceData: [],
    };
  },
  methods: {
    async saveFaceInfo() {
      const faceData = this.faceData;
      await this.$store.dispatch('SAVE_FACE_INFO', faceData);
    },
    async resetFaceData(){
      await this.$store.dispatch('SAVE_FACE_INFO', '');
    }
  },
  mounted() {
    this.faceLength = this.getImageLength('face');
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
.select__circle .select__input {
  border-radius: 50%;
}
.select__circle .select__label {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}
.circle__face-1 {
  background: #fc0;
}
.circle__face-2 {
  background: #486be7;
}
.circle__face-3 {
  background: #30d85f;
}
.circle__face-4 {
  background: #ed661b;
}
.circle__face-5 {
  background: #640cd6;
}
.select__face-1 {
  background: url('@/assets/imgs/face/face_1.png') no-repeat center / auto 100%;
}
.select__face-2 {
  background: url('@/assets/imgs/face/face_2.png') no-repeat center / auto 100%;
}
.select__face-3 {
  background: url('@/assets/imgs/face/face_3.png') no-repeat center / auto 100%;
}
.select__face-4 {
  background: url('@/assets/imgs/face/face_4.png') no-repeat center / auto 100%;
}
.select__face-5 {
  background: url('@/assets/imgs/face/face_5.png') no-repeat center / auto 100%;
}
</style>
