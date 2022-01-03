<template>
  <header>
    <IconBase width="167" height="41" icon-color="#37375A" icon-name="MainLogo">
      <MainLogo />
    </IconBase>
  </header>
</template>

<script setup lang="ts">
import IconBase from '@/shared/components/icons/IconBase.vue'
import MainLogo from '@/shared/components/icons/MainLogo.vue'
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  background: #ffce33;
}
</style>
