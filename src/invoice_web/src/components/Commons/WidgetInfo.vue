<template>
  <div class="col-md-4">
    <div class="stats">
      <div class="stats-number">
        {{number}}
      </div>
      <div class="stats-title">
        {{title}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'WidgetInfo',
  props: ['number', 'title']
};

</script>

<style scoped lang="scss">

.stats-number, .stats-title {
  line-height: 1;
}

.stats-number {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 2.625rem;
  margin-bottom: 0.5rem;
}

</style>
