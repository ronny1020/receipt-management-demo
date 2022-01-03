<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox || `0 0 ${width} ${height}`"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface Props {
  iconName: string
  width: number | string
  height: number | string
  iconColor: string
  viewBox?: string
}

const props = withDefaults(defineProps<Props>(), {
  iconName: 'iconName',
  width: 18,
  height: 18,
  iconColor: 'currentColor',
  viewBox: '',
})

const { iconName, width, height, iconColor, viewBox } = reactive(props)
</script>
