<template>
<table v-if='!isEmpty'>
   <thead>
      <tr>
      <th>NPS</th>
      <th>OD</th></tr>
   </thead>
   <tbody>
      <tr>
         <td>1</td>
         <td>2</td>
      </tr>
       <tr>
         <td>1</td>
         <td>2</td>
      </tr>
   </tbody>
</table>
</template>

<script>
import data from './data/data-db.js'
export default {
   name: 'make-table',
   props: {
      Table: String,
      Headers: Array,
      Columns: Object
   },
   data() {
      return {
         result: [],
      }
   },
   computed: {
      isEmpty() {
         return (this.$data.result.length === 0) ? true : false
      }
   },
   methods: {
      loadData() {
      // const temp = require('./data.json')
      // let data = temp['PIPE']
      console.log(data)
      }
   },
   mounted() {
      this.loadData()
   }

}
</script>

