<template>
  <div class="wrap">
    <pageView />
  </div>
</template>

<script>
import pageView from '@/components/pageView.vue';
export default {
  name: 'App',
  components: { pageView },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
ul,
li {
  list-style: none;
}
button,
input {
  border: 0;
  background-color: none;
  background-image: none;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
}
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #e8e8e8;
}
</style>
