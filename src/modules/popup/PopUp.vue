<template>
  <div
    :class="{ 'popup-shown': component }"
    class="popup"
    @click.self="onBgClicked"
  >
    <component
      :is="component"
      v-bind="props"
    />
  </div>
</template>

<script>
import { closePopup } from '@plugins/popup'

export default {
  name: 'PopUp',
  computed: {
    popup() {
      return this.$store.state.popup
    },
    component() {
      return this.popup.component
    },
    props() {
      return this.popup.props
    },
    clickBgToClose() {
      return this.popup.clickBgToClose
    },
  },
  methods: {
    onBgClicked() {
      if (this.clickBgToClose) {
        closePopup()
      }
    },
  },
}
</script>
