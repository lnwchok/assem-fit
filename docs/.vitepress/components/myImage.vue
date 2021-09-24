<template>
    <img :src=source :alt=alt>
</template>

<script>
export default {
    props: ['source', 'alt']
}
</script>