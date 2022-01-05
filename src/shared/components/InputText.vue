<template>
  <input
    :value="props.modelValue"
    @input="updateValue(($event.target as HTMLInputElement).value)"
  />
</template>

<script setup lang="ts">
/* eslint-disable vue/no-unused-properties */
interface Props {
  modelValue: string | null
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function updateValue(value: string): void {
  emit('update:modelValue', value)
}
</script>

<style lang="scss" scoped>
input {
  box-sizing: border-box;
  width: 100%;
  height: 36px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 12px;
  line-height: 18px;
  text-align: center;

  &::placeholder {
    color: #9191a0;
  }

  &:focus {
    outline: none;
  }
}
</style>
