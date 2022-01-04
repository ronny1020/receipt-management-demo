<template>
  <header>
    <IconBase width="167" height="41" icon-color="#37375A" icon-name="MainLogo">
      <MainLogo />
    </IconBase>
  </header>
  <div class="description">
    <span class="title">110年12月</span>
    <span class="subtitle">共 0,000 張 , 總金額 000,000 元</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { initInvoices } from '../../application/initInvoices'
import IconBase from '@/shared/components/icons/IconBase.vue'
import MainLogo from '@/shared/components/icons/MainLogo.vue'

onMounted(() => {
  void initInvoices()
})
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

.description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70px;

  .title {
    color: #37375a;
    font-weight: bold;
    font-style: normal;
    font-size: 18px;
    line-height: 27px;
  }

  .subtitle {
    color: #51519b;
    font-size: 14px;
    line-height: 21px;
  }
}
</style>
