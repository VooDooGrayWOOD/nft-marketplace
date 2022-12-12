<template lang="">
    <div class="head">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.head {
    background-color: transparent;
    flex: 1;
    letter-spacing: 0.00px;
    line-height: 39.2px;
    margin-top: -1px;
    mix-blend-mode: normal;
    position: relative;
    text-align: left;
    white-space: nowrap;
    color: var(--text);
    font-family: var(--font-family-work_sans);
    font-size: var(--font-size-xl);
    font-style: normal;
    font-weight: 600;
}

</style>