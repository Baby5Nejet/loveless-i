<template>
  <div class="container">
    <Divider>With Text</Divider>
    <Button
      type="primary"
      @click="modal = true"
    >
      Primary
    </Button>
    <Divider dashed />
    <Modal
      v-model=" modal"
      title="Common Modal dialog box title"
    >
      <p>Content of dialog</p>
      <div slot="footer">
        <Button @click="addCancel()">
          Cancel
        </Button>
        <Button @click="addOk()">
          Ok
        </Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      modal: false
    }
  },
  methods: {
    addCancel () {
      this.$Message.info('Clicked ok')
    },
    addOk () {
      this.$Message.info('Clicked cancel')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
