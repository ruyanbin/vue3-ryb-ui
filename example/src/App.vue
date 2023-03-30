<template>
  <div>启动测试--{{msg}}---{{msg2}}</div>
  <ryb-button>123</ryb-button>
  <ryb-icon>icon--1</ryb-icon>
</template>
<script setup lang="ts">
	import {ref} from "vue"
	const msg = ref('hello word')
	const msg2 = ref('hello word2')
	
</script>