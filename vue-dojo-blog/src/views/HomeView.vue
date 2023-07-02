<template>
  <div class="home">
    home
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    console.log('setup')

    const name = ref('mario')
    const age = ref(30)

    const handleClick = () => {
      name.value = 'lzzzzl'
      age.value = 35
    }

    return { name, age, handleClick}
  }
}
</script>
