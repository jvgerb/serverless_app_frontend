<template>
  <div class="energicos-footer">
    <div class="horizontal-divider">
      <hr class="energicos-footer-line">
    </div>
    <footer-description></footer-description>
    <footer-wave></footer-wave>
  </div>
</template>

<script>

import Description from './Description';
import Wave from './Wave';

export default {
  name: 'Footer',
  components: {
    'footer-description': Description,
    'footer-wave': Wave
  }
};

</script>
