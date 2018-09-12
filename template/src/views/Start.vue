<template>
  <div class="section">
    <div class="container">
      <h1 class="title">{{msg}}</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'Start',
  data () {
    return {
      msg: 'Hej Tor'
    }
  },
  mounted(){},
  methods: {},
  beforeDestroy(){},
  computed: {
    ...mapGetters(["isDebug"]),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/custom_variables.scss";


</style>
