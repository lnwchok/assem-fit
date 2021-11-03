<template>
   <tbody>
      <template v-if="isMultipleBodyColumn">
         <tr v-for="(v, index) in data" :key="index">
            <!-- <td v-show="isBlank(cell)" v-for="(cell, index) in v" :key="index" v-html="t(cell).v" :rowspan="t(cell).sp"></td> -->
            <td v-for="(cell, index) in v" :key="index" v-html="cell"></td>
         </tr>
      </template>
      <template v-else>
         <tr>
            <td v-for="(v, index) in data" :key="index" v-html="v"></td>
         </tr>
      </template>
   </tbody>
</template>

<script>
export default {
   props: ['data'],
   computed: {
      isMultipleBodyColumn() {
         return this.data[0] instanceof Array ? true : false
      }
   },
   methods: {
     t(val) {
       let valStr = val.toString()
       let vv = valStr.includes(':') ? valStr.split(':').shift() : valStr
       let vspan = valStr.includes(':') ? parseInt(valStr.split(':').pop()) : 1
       return {v: vv, sp: vspan}
     },
     isBlank(val) {
       return (val !== '')
     },
   }
}
</script>
