<template>
  <div class="pages-entry">
    <component :is="component"/>

    <WaitLoad :class="{ hidden: component }"/>
  </div>
</template>

<script>
import { loadView } from '@resources/preload'

import WaitLoad from '@ui/preloader/WaitLoad'

export default {
  name: 'PagesEntry',
  components: {
    WaitLoad,
  },
  data() {
    return {
      component: null,
    }
  },
  computed: {
    view() {
      return this.$route.path.split('/')[1] || 'root'
    },
  },
  watch: {
    view: {
      immediate: true,
      handler() {
        this.registerPage()
      },
    },
  },
  methods: {
    registerPage() {
      this.component = null

      this.$store.commit('layout/setLinksBlocked', true)

      import('@pages/' + this.view + '/index.js')
        .then(async view => {
          this.component = await loadView(view)

          this.$store.commit('layout/setLinksBlocked', false)
        })
        .catch(() => {
          this.$router.replace('/')
        })
    },
  },
}
</script>
