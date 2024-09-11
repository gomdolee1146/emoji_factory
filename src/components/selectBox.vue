<template>
  <div class="select">
    <div class="select__tab">
      <button
        class="select__tab_btn"
        :class="selectBtn === tab ? 'on' : ''"
        v-for="(tab, idx) in selectTabList"
        :key="idx"
        @click="changeTabBtn(tab)"
      >
        {{ tab }}
      </button>
    </div>
    <div class="select__wrap">
      <face-select v-show="selectBtn === 'face'" :randomFace="randomEmoji.face" />
      <eyes-select v-show="selectBtn === 'eyes'" :randomEyes="randomEmoji.eyes" />
      <mouth-select v-show="selectBtn === 'mouth'" :randomMouth="randomEmoji.mouth" />
      <acc-select v-show="selectBtn === 'acc'" />
      <bg-select v-show="selectBtn === 'bg'" />
      <preset-select v-show="selectBtn === 'preset'" />
    </div>
  </div>
</template>

<script>
import faceSelect from '@/components/select/faceSelect.vue';
import eyesSelect from '@/components/select/eyesSelect.vue';
import mouthSelect from '@/components/select/mouthSelect.vue';
import accSelect from '@/components/select/accSelect.vue';
import bgSelect from '@/components/select/bgSelect.vue';
import presetSelect from '@/components/select/presetSelect.vue';

export default {
  name: 'selectBox',
  components: { faceSelect, eyesSelect, mouthSelect, accSelect, bgSelect, presetSelect },
  props: {
    randomData: { type: Object, default: () => {} },
  },
  data() {
    return {
      selectBtn: 'face',
      selectTabList: ['face', 'eyes', 'mouth', 'acc', 'bg', 'preset'],
      randomEmoji: {},
    };
  },
  methods: {
    changeTabBtn(tab) {
      this.selectBtn = tab;
    },
  },

  watch: {
    randomData: {
      deep: true,
      handler() {
        this.randomEmoji = this.randomData
      },
    },
  },
};
</script>

<style>
.select__tab {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  height: 60px;
  padding: 4px;
  border-radius: 16px;
  background: #f0f0f0;
  box-sizing: border-box;
  overflow: hidden;
}
.select__tab_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.select__tab_btn:hover {
  background: #e8e8e8;
}
.select__tab_btn.on {
  background: #fff;
}
.select__tab_btn:first-child {
  border-radius: 12px 0 0 12px;
}
.select__tab_btn:last-child {
  border-radius: 0 12px 12px 0;
}
.select__wrap {
  width: 100%;
  height: 596px;
  margin-top: 8px;
  padding: 8px;
  border: 4px solid #f0f0f0;
  border-radius: 16px;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
}

.select__list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  width: 100%;
  padding: 16px;
}
.select__lst {
  display: block;
  width: 90px;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  aspect-ratio: 1/1;
}
.select__box {
  position: relative;
  width: 100%;
  height: 100%;
}
.select__input {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  z-index: 10;
  cursor: pointer;
}
.select__input:checked {
  border: 2px solid #c00;
  border-radius: 4px;
  box-sizing: content-box;
}
.select__label {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
