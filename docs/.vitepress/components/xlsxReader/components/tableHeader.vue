<template>
   <thead>
      <tr>
         <th v-for="(d, index) in data" :key="index" v-html="d"></th>
      </tr>
   </thead>
</template>

<script>
export default {
   props: ['data', 'blocks']
   // data() {
   //   return {};
   // },
   // computed: {
   //   convert2Obj() {
   //     var obj = [];
   //     console.log(this.data);
   //     for (let i = 0; i < this.data.length; i++) {
   //       if (this.blocks[i] !== 0) {
   //         obj.push({ spancolumn: this.blocks[i], data: this.data[i] });
   //       }
   //     }
   //     return obj;
   //   }
   // },
   // method: {}
}
</script>
