<template>
  <div class="p16 about-view">
    <h2>{{ $T('about/starred') }}</h2>
    <p>{{ $T('about/miss-murple') }}</p>

    <div class="pix">
      <div class="pic pic-1"/>
      <div class="pic pic-2"/>
      <div class="pic pic-3"/>
    </div>

    <div class="controls">
      <button @click="clickSound">{{ $T('about/click') }}</button>
      <button @click="playMusic">{{ $T('about/play-music') }}</button>
      <button @click="stopMusic">{{ $T('about/stop-music') }}</button>
      <button @click="showAboutPopup">{{ $T('about/click-me') }}</button>
    </div>
  </div>
</template>

<script>
import { getSound } from '@resources/preload'

export default {
  name: 'AboutView',
  methods: {
    clickSound() {
      getSound('about', 'click').play()
    },
    playMusic() {
      getSound('about', 'scan').play()
    },
    stopMusic() {
      getSound('about', 'scan').pause()
      getSound('about', 'scan').currentTime = 0
    },
    showAboutPopup() {
      this.$showPopup('about/AboutPopup')
    },
  },
}
</script>
