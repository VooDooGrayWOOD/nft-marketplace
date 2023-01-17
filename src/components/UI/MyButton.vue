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
  align-items: center;
  background-color: var(--call-to-action);
  border: 1px none;
  font-family: var(--font-family-work_sans);
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  gap: 12px;
  color: var(--text);
  height: 60px;
  justify-content: center;
  mix-blend-mode: normal;
  padding: 0 30px;
  pointer-events: auto;
  position: relative;
  box-shadow: none;
  transition: all 0.3s ease;
  width: fit-content;
}

.btn:hover {
  transform: scale(0.95);
}
</style>
