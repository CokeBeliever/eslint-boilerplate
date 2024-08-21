<template>
  <h1>CokeBeliever</h1>
  <!-- 不通过：vue recommended 的 vue/valid-v-on -->
  <button @click>按钮</button>
</template>

<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'HomePage' })

const name = 'CokeBeliever' // 不通过：自定义的 @typescript-eslint/no-unused-vars 规则
const gender: any = 'male' // 不通过：ts recommended 的 @typescript-eslint/no-explicit-any 规则

console.log(gender)
console.log(age) // 不通过：js recommended 的 no-undef 规则

Promise
window
</script>

<style scoped></style>
