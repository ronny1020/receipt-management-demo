<template>
  <header>
    <router-link to="/" class="back-icon">
      <IconBase width="6" height="9" icon-color="#fff" icon-name="BackIcon">
        <BackIcon />
      </IconBase>
    </router-link>
    手動輸入發票
  </header>
  <form class="main">
    <div class="input-title">發票號碼</div>
    <div class="input-group invoice-number-input">
      <InputText placeholder="大寫英文" />
      <InputText placeholder="8碼發票號碼" />
    </div>
    <div class="input-title">開立時間</div>
    <div class="input-group invoice-date-input">
      <InputText placeholder="西元年" />
      <InputText placeholder="月份" />
      <InputText placeholder="日期" />
    </div>
    <VButton value="提交" class="summit-button" />
  </form>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BackIcon from '@/shared/components/icons/BackIcon.vue'
import IconBase from '@/shared/components/icons/IconBase.vue'
import InputText from '@/shared/components/InputText.vue'
import VButton from '@/shared/components/VButton.vue'
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

.main {
  display: flex;
  flex-direction: column;
  width: 375px;
  margin: 0 auto;
  padding: 20px 28px;

  .input-title {
    height: 30px;
    color: #5a5a78;
    font-size: 14px;
    line-height: 30px;
  }

  .input-group {
    display: grid;
    grid-gap: 10px;
    padding: 7px 0;
  }

  .invoice-number-input {
    grid-template-columns: 1fr 2fr;
  }

  .invoice-date-input {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .summit-button {
    width: 160px;
    margin: 40px auto;
  }
}
</style>
