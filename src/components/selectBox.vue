<template>
  <div class="select">
    <div class="select__tab">
      <button
        class="select__tab_btn"
        :class="idx === 0 ? 'on' : ''"
        v-for="(tab, idx) in selectTabList"
        :key="idx"
        @click="selectBtn = tab"
      >
        {{ tab }}
      </button>
    </div>
    <div class="select__wrap">
      <keep-alive>
        <component :is="`${selectBtn}Select`"></component>
      </keep-alive>
    </div>
    <!-- <div class="select__wrap">
      <ul class="select__list">
        <li class="select__lst" v-for="(a, idx) in 11" :key="idx">
          <div class="select__box">
            <input type="radio" class="select__input" :checked="idx === 0" />
            <label class="select__label">{{ a }}</label>
          </div>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import faceSelect from '@/components/select/faceSelect.vue';
import eyesSelect from '@/components/select/eyesSelect.vue';
import noseSelect from '@/components/select/noseSelect.vue';
import mouthSelect from '@/components/select/mouthSelect.vue';
import accSelect from '@/components/select/accSelect.vue';

export default {
  name: 'selectBox',
  components: { faceSelect, eyesSelect, noseSelect, mouthSelect, accSelect },
  data() {
    return {
      selectBtn: 'face',
      selectTabList: ['face', 'eyes', 'nose', 'mouth', 'acc'],
    };
  },
  methods() {},
  computed: {},
  mounted() {},
};
</script>

<style>
.select__tab {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
  height: 60px;
  padding: 4px;
  border-radius: 24px 24px 0 0;
  box-sizing: border-box;
  overflow: hidden;
}
.select__tab_btn {
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #f4f4f4;
}
.select__tab_btn:hover {
  background: #e8e8e8;
}
.select__wrap {
  width: 100%;
  height: calc(720px - 40px);
  overflow-y: auto;
  overflow-x: hidden;
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
  background: #f1f1f1;
  aspect-ratio: 1/1;
}
.select__box {
  position: relative;
  width: 100%;
  height: 100%;
}
.select__input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.select__input:checked {
  border: 2px solid #c00;
  box-sizing: content-box;
}
</style>
