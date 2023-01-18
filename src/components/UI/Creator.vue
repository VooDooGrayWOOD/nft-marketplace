<template>
  <div class="artist-card-grid">
    <div class="artist-card-row">
      <a href="artist-page">
        <div class="artist-card">
          <div class="artist-avatar">
            <div class="avatar">
              <div class="asset">
                <img class="avatar-placeholder"
                     :src="avatar"
                     alt="Avatar Placeholder">
              </div>
            </div>
          </div>
          <div class="artist-info">
            <div class="dish-studio">
              {{ dish_studio }}
            </div>
            <div class="additional-info">
              <div class="total-sales">Total Sales:</div>
              <div class="price">{{ price }}</div>
            </div>
          </div>
          <div class="ranking-number">
            <div class="number">{{ number }}</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: String,
    dish_studio: String,
    price: String,
    number: String
  }
}

</script>

<style scoped>
.artist-card-grid {
  align-items: flex-start;
  background-color: transparent;
  border: 1px none;
  gap: 60px;
  height: auto;
  position: relative;
  width: fit-content;
}

.artist-card-row {
  align-items: flex-start;
  background-color: transparent;
  border: 1px none;
  display: flex;
  gap: 30px;
  height: auto;
  position: relative;
  /*width: 400px;*/
}

.artist-card {
  align-items: center;
  background-color: var(--background---secondary);
  border: 1px none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
  height: auto;
  mix-blend-mode: normal;
  padding: 20px;
  margin: 10px;
  pointer-events: auto;
  position: relative;
  transition: all 0.3s ease;
}

.artist-avatar {
  align-items: flex-end;
  background-color: transparent;
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: auto;
  position: relative;
  width: fit-content;
}

.avatar {
  align-items: flex-start;
  background-color: transparent;
  border: 1px none;
  display: flex;
  gap: 10px;
  height: auto;
  mix-blend-mode: normal;
  position: relative;
  width: 110px;
}

.asset {
  background-color: transparent;
  border: 1px none;
  height: 120px;
  margin-right: -10px;
  min-width: 120px;
  mix-blend-mode: normal;
  position: relative;
}

.avatar-placeholder {
  background-color: transparent;
  height: 120px;
  left: 0;
  mix-blend-mode: normal;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 120px;
}

.artist-info {
  align-items: center;
  align-self: stretch;
  background-color: transparent;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: auto;
  justify-content: center;
  position: relative;
}

.dish-studio {
  align-self: stretch;
  background-color: transparent;
  letter-spacing: 0.00px;
  line-height: 30.8px;
  margin-top: -1px;
  mix-blend-mode: normal;
  font-size: var(--font-size-l);
  position: relative;
  text-align: center;
  white-space: nowrap;
}

.additional-info {
  align-items: flex-start;
  align-self: stretch;
  background-color: transparent;
  border: 1px none;
  display: flex;
  gap: 10px;
  height: auto;
  justify-content: center;
  position: relative;
}

.total-sales {
  background-color: transparent;
  flex: 1;
  letter-spacing: 0.00px;
  color: var(--caption--label-text);
  line-height: 22.4px;
  margin-top: -1px;
  mix-blend-mode: normal;
  position: relative;
  text-align: right;
  white-space: nowrap;
}

.price {
  background-color: transparent;
  flex: 1;
  letter-spacing: 0.00px;
  line-height: 22.4px;
  margin-top: -1px;
  mix-blend-mode: normal;
  font-style: normal;
  font-size: var(--font-size-m);
  position: relative;
  text-align: left;
  white-space: nowrap;
}

.ranking-number {
  background-color: var(--background);
  border: 1px none;
  border-radius: 20px;
  display: flex;
  align-items: center;
  height: 30px;
  left: 20px;
  mix-blend-mode: normal;
  position: absolute;
  top: 18px;
  width: 30px;
}

.number {
  background-color: transparent;
  height: 22px;
  left: 10px;
  letter-spacing: 0.00px;
  line-height: 22.4px;
  mix-blend-mode: normal;
  position: absolute;
  color: var(--caption--label-text);
  font-family: var(--font-family-space_mono);
  font-size: var(--font-size-m);
  text-align: center;
  top: 3px;
  white-space: nowrap;
  width: auto;
}
</style>