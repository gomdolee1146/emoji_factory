<template>
  <div class="page">
    <resultBox />
    <selectBox />
  </div>
</template>

<script>
import resultBox from '@/components/resultBox.vue';
import selectBox from '@/components/selectBox.vue';

export default {
  name: 'pageView',
  components: { resultBox, selectBox },
};
</script>

<style>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 960px;
  height: 720px;
  padding: 28px 40px;
  border-radius: 40px;
  background: #fff;
  box-shadow: 0 0 8px 8px rgba(0,0,0,0.12);
}
.page > div {
  flex: 0 0 50%;
  height: 100%;
  border-radius: 20px;
  background: #fff;
}
</style>
