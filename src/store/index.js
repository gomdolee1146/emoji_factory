import { createStore } from 'vuex';
const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.Key !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

export default createStore({
  state: {
    face: '',
    eyes: '',
    mouth: '',
    acc: [],
    bg: '',
    presetData: storage.fetch(),
  },
  getters: {
    storedPresetData(state) {
      return state.presetData;
    },
  },
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
    saveBgInfo(state, bgData) {
      state.bg = bgData;
    },
    addPreset(state, presetData) {
      const {pData, pName} = presetData
      const presetObj = { item: pData };
      localStorage.setItem(pName, JSON.stringify(presetObj));
      state.presetData.push(presetObj);
    },
    removePreset(state, payload) {
      localStorage.removeItem(payload.presetData.item);
      state.presetData.splice(payload.index, 1);
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
    SAVE_BG_INFO({ commit }, bgData) {
      commit('saveBgInfo', bgData);
    },
  },
});
