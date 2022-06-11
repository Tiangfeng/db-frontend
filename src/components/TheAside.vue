<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      style="width: 200px; height: calc(100vh - 50px)"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>选项一</span>
      </template>

      <el-menu-item index="1-3">选项1-1</el-menu-item>

    </el-sub-menu>
    <el-menu-item index="2">
<!--      <el-icon><icon-menu /></el-icon>-->
      <el-icon><Grid /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'TheAside'
};
</script>

<style scoped>

</style>