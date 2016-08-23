<template>
  <div>
    <button @click='increment'>Increment +1</button>
    <button @click='decrement'>Decrement -1</button>
    <input type="number" :value="Value" @change='updateMessage'>
  </div>
</template>

<script>
  import { incrementCounter, decrementCounter, updateNum } from '../vuex/actions'
  import { getNum } from '../vuex/getters'

  export default{
    methods: {
      updateMessage: function (e) {
        console.log(e.target.value)
        this.updateA(e.target.value)
      }
    },
    vuex: {
      actions: {
        increment: incrementCounter,
        decrement: decrementCounter,
        updateA: updateNum
      },
      getters: {
        // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
        Value: getNum
      },
      setters: {
        Value: getNum
      }
    }
  }
</script>
