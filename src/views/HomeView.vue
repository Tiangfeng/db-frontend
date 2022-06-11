<template>
<!--  功能区域-->
  <div style="padding: 10px">
    <div style="margin: 10px 0">
      <el-button type="primary">新增</el-button>
      <el-button>导入</el-button>
      <el-button>导出</el-button>
    </div>

<!--    搜索区域-->
    <div style="margin: 10px 0">
      <el-input v-model="search" placeholder="请输入关键字" style="width: 20%" />
      <el-button type="primary" style="margin-left: 5px; margin-bottom: 2px">查询</el-button>
    </div>

    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column prop="date" label="Date" sortable />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="address" label="Address" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default>
          <el-button link type="primary" size="small" @click="handleEdit"
          >编辑</el-button
          >
          <el-popconfirm title="确定要删除这一项吗?">
            <template #reference>
              <el-button link type="primary" size="small">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

<!--    分页-->
    <div style="margin: 10px 0">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="10"
          :page-sizes="[5, 10, 20]"
          :pager-count="11"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          background
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {

  },
  data() {
    return {
      search: '',
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
      currentPage: 2,
      total: 10
    }
  },
  methods: {
    handleEdit() {},
    handleSizeChange() {},
    handleCurrentChange() {},

  }
}
</script>
