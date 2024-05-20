import { createStore } from 'vuex';

export default createStore({
  state: {
    face: '',
    eyes: '',
    mouth: '',
    acc: [],
  },
  getters: {},
  mutations: {
    saveFaceInfo(state, faceData) {
      state.face = faceData;
    },
    saveEyesInfo(state, eyesData) {
      state.eyes = eyesData;
    },
    saveMouthInfo(state, mouthData) {
      state.mouth = mouthData;
    },
    saveAccInfo(state, accData) {
      state.acc = accData;
    },
  },
  actions: {
    SAVE_FACE_INFO({ commit }, faceData) {
      commit('saveFaceInfo', faceData);
    },
    SAVE_EYES_INFO({ commit }, eyesData) {
      commit('saveEyesInfo', eyesData);
    },
    SAVE_MOUTH_INFO({ commit }, mouthData) {
      commit('saveMouthInfo', mouthData);
    },
    SAVE_ACC_INFO({ commit }, accData) {
      commit('saveAccInfo', accData);
    },
  },
});
