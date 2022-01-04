<template>
  <span class="tag" :class="`tag-${type}`">{{ text }}</span>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface Props {
  type?: 'primary' | 'danger'
  text: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  text: '',
})

const { type, text } = reactive(props)
</script>

<style lang="scss" scoped>
.tag {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 16px;
  padding: 0;
  border-radius: 8px;
  font-size: 10px;
  line-height: 16px;

  &-primary {
    background: var(--primary-color);
    color: #37375a;
  }

  &-danger {
    background: var(--danger-color);
    color: #fff;
  }
}
</style>
