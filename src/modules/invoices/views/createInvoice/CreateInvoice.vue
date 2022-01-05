<template>
  <header>
    <router-link to="/" class="back-icon">
      <IconBase width="6" height="9" icon-color="#fff" icon-name="BackIcon">
        <BackIcon />
      </IconBase>
    </router-link>
    手動輸入發票
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BackIcon from '@/shared/components/icons/BackIcon.vue'
import IconBase from '@/shared/components/icons/IconBase.vue'
</script>

<style lang="scss" scoped>
header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  background: var(--primary-color);
  color: #37375a;
  font-size: 14px;
  line-height: 21px;
  text-align: center;

  .back-icon {
    position: absolute;
    top: 10px;
    left: 15px;
    padding: 8px;
    line-height: 0;
  }
}
</style>
