<template>
  <li class="item last">
    <span @click="editing=true" v-if="editing">
      {{value | editableInputFormat(format, suffix)}}
    </span>
    <span class="rowEditableContainer" v-else>
      <input :value="value"
             @input="$emit('input', $event.target.value)"
             @keydown.enter="closeInput($event.target.value)"
             @blur="closeInput($event.target.value)"
             type="text"
             class="form-control">
    </span>
  </li>
</template>

<script>

function closeInput(value) {
  this.editing = false;
  this.updateInputValue(this.field, value);
}

export default {
  name: 'InputEditable',
  props: ['value', 'field', 'updateInputValue', 'format', 'suffix', 'editing'],
  methods: {
    closeInput
  }
};

</script>
