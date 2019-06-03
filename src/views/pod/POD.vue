<template>
  <FormCard>
    <div class="form-row">
      <div class="form-field">
        <label>POD ID</label>
        <input type="text" placeholder="POD_2501">
      </div>

      <div class="form-field">
        <label>Street Address</label>
        <input type="text" placeholder="Oraniendamm">
      </div>

      <div class="form-field">
        <label>Additional Attribute</label>
        <input type="text" placeholder="side entrance">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Street Number</label>
        <input type="text" placeholder="6">
      </div>

      <div class="form-field">
        <label>Zip Code</label>
        <input type="text" placeholder="13469">
      </div>

      <div class="form-field">
        <label>Place</label>
        <input type="text" placeholder="Berlin">
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field col-2">
        <label>Comment</label>
        <textarea></textarea>
      </div>
    </div>
  </FormCard>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormCard from '@/components/FormCard.vue';
import DatePicker from '@/components/DatePicker.vue';
import Rating from '@/components/Rating.vue';

@Component({
  components: { FormCard, DatePicker, Rating },
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
</style>
 