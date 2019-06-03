<template>
  <FormCard>
    <div class="form-row">
      <div class="form-field">
        <label>Distribution Network ID</label>
        <input type="text" placeholder="distribution_network_1">
      </div>

      <div class="form-field">
        <label>Distribution Network Type</label>
        <select>
          <option value="Heat">Generation</option>
        </select>
      </div>

      <div class="form-field">
        <label>Distribution Network Name</label>
        <input type="text" placeholder="EK1">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Hydraulic Circuite Type</label>
        <input type="text" placeholder="Gravity System">
      </div>

      <div class="form-field">
        <label>Distribution Classification</label>
        <select>
          <option value="Heat">Heat network</option>
        </select>
      </div>

      <div class="form-field">
        <label>Distribution Assignment</label>
        <select>
          <option value="Heat">Intern</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Length</label>
        <input type="text" placeholder="100">
      </div>

      <div class="form-field">
        <label>Material</label>
        <select>
          <option value="Heat">Copper</option>
        </select>
      </div>

      <div class="form-field">
        <label>Flow Rate Type</label>
        <select>
          <option value="Heat">Variable</option>
        </select>
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
 