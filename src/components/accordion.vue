<template>
  <b-card no-body class="mb-1">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button block href="#" v-b-toggle="`accordion-${idx}`" variant="info">{{ `${idx + 1}) ${question}` }}</b-button>
    </b-card-header>
    <b-collapse :id="`accordion-${idx}`" role="tabpanel">
      <b-card-body>
        <p class="card-text">{{ answer }}</p>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    idx: {
      type: Number,
      required: true,
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
