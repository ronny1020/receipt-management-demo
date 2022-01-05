<template>
  <input type="button" />
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
input {
  display: grid;
  box-sizing: border-box;
  height: 40px;
  border: none;
  border-radius: 5px;
  background: var(--primary-color);
  color: #37375a;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  place-items: center;

  &:focus {
    outline: none;
  }
}
</style>
