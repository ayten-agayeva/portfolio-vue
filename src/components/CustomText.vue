<template>
    <component :is="tag" :class="size">
        <slot />
    </component>
</template>

<script>
export default {
    name: "CustomText",
    props: {
        tag: {
            type: String,
            default: 'span'
        },
        size: {
            type: String,
            default: "", // normal:14, small:12
        }
    }
}
</script>

<style lang='scss' scoped>
.normal {
   font-size: 16px;
}
.small {
    font-size: 12px;
}
</style>