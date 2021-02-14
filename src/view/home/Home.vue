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
      width="800"
      title="Common Modal dialog box title"
    >
      <Form
        ref="fomData"
        :model="fomData"
      >
        <Table
          :loading="modalLoading"
          :columns="modalCol"
          :data="fomData.modalForm"
        >
          <template
            slot="buzType"
            slot-scope="{index}"
          >
            <FormItem>
              <Select
                v-model="fomData.modalForm[index].buzType"
                :transfer="true"
              >
                <Option value="beijing">
                  经营单元
                </Option>
                <Option value="shanghai">
                  经营单元目标
                </Option>
              </Select>
            </FormItem>
          </template>
          <template
            slot="role"
            slot-scope="{index}"
          >
            <FormItem>
              <Select
                v-model="fomData.modalForm[index].role"
                multiple
                :transfer="true"
              >
                <Option value="beijing">
                  经营单元目标管理员
                </Option>
                <Option value="shanghai">
                  经营单元目标超级管理员
                </Option>
              </Select>
            </FormItem>
          </template>
          <template
            slot="actType"
            slot-scope="{index}"
          >
            {{ index }}
          </template>
          <template
            slot="template"
            slot-scope="{index}"
          >
            <FormItem>
              <Select
                v-model="fomData.modalForm[index].template"
                :transfer="true"
              >
                <Option value="beijing">
                  New York
                </Option>
                <Option value="shanghai">
                  London
                </Option>
                <Option value="shenzhen">
                  Sydney
                </Option>
              </Select>
            </FormItem>
          </template>
        </Table>
      </Form>
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
      modal: true,
      modalLoading: false,
      modalCol: [
        {
          title: '业务类型',
          minWidth: 120,
          slot: 'buzType',
          renderHeader: (h, par) => {
            return [h('span', { style: 'color:red' }, '*'),
              h('span', ' ' + par.column.title)]
          }
        },
        {
          title: '需要提交审批的角色',
          minWidth: 150,
          slot: 'role',
          renderHeader: (h, par) => {
            return [h('span', { style: 'color:red' }, '*'),
              h('span', ' ' + par.column.title)]
          }
        },
        {
          title: '操作类型',
          minWidth: 120,
          slot: 'actType',
          renderHeader: (h, par) => {
            return [h('span', { style: 'color:red' }, '*'),
              h('span', ' ' + par.column.title)]
          }
        },
        {
          title: '审批链模板',
          minWidth: 120,
          slot: 'template',
          renderHeader: (h, par) => {
            return [h('span', { style: 'color:red' }, '*'),
              h('span', ' ' + par.column.title)]
          }
        }
      ],
      fomData:
      { modalForm: [
        { buzType: '',
          role: '',
          actType: '',
          template: '' }
      ] }

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
