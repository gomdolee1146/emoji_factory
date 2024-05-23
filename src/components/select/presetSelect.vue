<template>
  <ul class="select__list">
    <li class="select__lst" v-for="(preset, idx) in this.storedPresetData" :key="idx">
      <div class="select__box">
        <input
          type="radio"
          class="select__input"
          :value="preset"
          v-model="presetData"
          @change="savePresetInfo(preset.item)"
        />
        <label class="select__label">
          <div class="result__bg" :style="`background-color:${preset.item.bgInfo}`"></div>
          <div
            class="result__layer"
            :class="`select__face-${preset.item.faceInfo}`"
          ></div>
          <div
            class="result__layer"
            :class="`select__eyes-${preset.item.eyesInfo}`"
          ></div>
          <div
            class="result__layer"
            :class="`select__mouth-${preset.item.mouthInfo}`"
          ></div>
          <div
            class="result__layer"
            :class="`select__acc-${acc}`"
            v-for="acc in preset.item.accInfo"
            :key="acc"
          ></div>
        </label>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'presetSelect',
  data() {
    return {
      presetLength: null,
      presetData: [],
    };
  },
  computed: {
    ...mapGetters(['storedPresetData']),
  },
  methods: {
    async savePresetInfo(data) {
      const saveData = data;

      await this.$store.dispatch('SAVE_FACE_INFO', saveData.faceInfo);
      await this.$store.dispatch('SAVE_EYES_INFO', saveData.eyesInfo);
      await this.$store.dispatch('SAVE_MOUTH_INFO', saveData.mouthInfo);
      await this.$store.dispatch('SAVE_ACC_INFO', saveData.accInfo);
      await this.$store.dispatch('SAVE_BG_INFO', saveData.bgInfo);
    },
  },
  mounted() {
    console.log('mounted', this.storedPresetData);
  },
};
</script>

<style></style>
