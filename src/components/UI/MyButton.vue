<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.btn {
    border-radius: 8px;
    border: 1px solid teal;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background: none;
    cursor: pointer;
    transition: border-color 0.25s;
}

.btn:hover {
    border-color: #ffffff;
}

.btn:focus,
.btn:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
}
</style>
