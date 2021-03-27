<template>
  <div class="wait-load">
    <div class="load-wrapper">
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke-width="6"
          stroke-dasharray="216"
          fill="none"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WaitLoad',
}
</script>

<style
    lang="scss"
    src="./wait-load.scss"
/>
