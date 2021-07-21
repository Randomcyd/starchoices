<template>
<div id="info-form">
    <el-button type="primary" @click="addAction()">+ 新建</el-button>
  <el-table :data="tableData" stripe style="width: 100%;top:20px">
    <el-table-column
      prop="num"
      label="序号"
      width="100"
      align='center'>
    </el-table-column>
    <el-table-column
      prop="name"
      label="项目名称"
      width="300">
    </el-table-column>
    <el-table-column
      prop="class"
      label="数据类型">
    </el-table-column>
    <el-table-column
      prop="time"
      label="上传时间">
    </el-table-column>
    <el-table-column
      prop="state"
      label="状态">
    </el-table-column>
    <el-table-column
      label="操作">
      <el-button type="primary" size='mini' round>查看</el-button>
      <el-button type="primary" size='mini' round>删除</el-button>
    </el-table-column>
  </el-table>
  <div class="page">
        <el-pagination
            background
            layout="prev, pager, next"
            :total="3">
        </el-pagination>
  </div>

</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          num: '1',
          name: '汇通信诚-和赢保理-汽车抵押贷款-2021-1',
          class: '汽车抵押贷款',
          time:'2021-04-19 13:15:49',
          state:'成功'
        }, {
         num: '2',
          name: '乐信-UOB-个人消费贷款-2021-1',
          class: '个人消费贷款',
          time:'2021-04-14 15:44:50',
          state:'成功'
        }]
      }
    },
    methods:{
      addAction(){
        this.$router.push('proinfo')
      }
    }
  }
</script>

<style scoped>
    button{
        height: 32px; line-height: 9px;
    }
    .page{
        width: 100%; text-align: center; margin-top: 40px;
    }
</style>