<template>
    <img :src=source :alt=alt>
</template>

<script>
export default {
    props: ['source', 'alt']
}
</script>

<style scoped>
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 150px;
  }
</style>