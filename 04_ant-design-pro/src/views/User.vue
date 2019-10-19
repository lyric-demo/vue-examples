<template>
  <div class="about">
    <h1>用户管理</h1>
    <a-table
      :columns="columns"
      :rowKey="record => record.record_id"
      :dataSource="data"
      :loading="loading"
      :pagination="false"
    >
      <template slot="gender" slot-scope="text">
        <span style="color:red;">{{ text | formatGender }}</span>
      </template>
    </a-table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("user");

const columns = [
  {
    title: "用户名",
    dataIndex: "user_name"
  },
  {
    title: "真实姓名",
    dataIndex: "real_name"
  },
  {
    title: "年龄",
    dataIndex: "age"
  },
  {
    title: "性别",
    dataIndex: "gender",
    scopedSlots: { customRender: "gender" }
  },
  {
    title: "备注",
    dataIndex: "memo"
  }
];

export default {
  mounted() {
    this.fetch();
  },
  data() {
    return {
      columns
    };
  },
  computed: {
    ...mapState(["loading", "data"])
  },
  methods: {
    ...mapActions(["fetch"])
  },
  filters: {
    formatGender(value) {
      if (!value) {
        return "未知";
      } else if (value === 1) {
        return "男";
      }
      return "女";
    }
  }
};
</script>
