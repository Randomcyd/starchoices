<template>
    <div id="test">
        <p class="title">静态池自动检测工具</p>
        <div class="info">
            <div class="info-wrap"><span>项目名称：</span><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            <div class="info-wrap">状态：<el-select v-model="value" placeholder="请选择">
                <el-option value="请输入">请输入</el-option>
                <el-option value="成功">成功</el-option>
                <el-option value="失败">失败</el-option>
                <el-option value="解析中">解析中</el-option>
            </el-select></div>
            <div class="block info-wrap">
                <span class="demonstration" style="width:80px">上传时间：</span>
                <el-date-picker
                v-model="value2"
                type="datetimerange"
                :picker-options="pickerOptions"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right">
                </el-date-picker>
            </div>
        </div>
        <div class="btn-group">
            <el-button type="primary">查询</el-button>
            <el-button>重置</el-button>
        </div>
        <info-form></info-form>
    </div>
</template>

<script>
import InfoForm from '../components/InfoForm.vue';
export default {
    data(){
        return {
            input: '',
            value:'',
            pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: ''
        }
    },
    components:{
        InfoForm
    }
}
</script>

<style scoped>
    #test{
        margin: 20px 16px; background: #fff; height: 660px;
        padding: 0 30px; box-sizing: border-box;
    }

    .title{
        width: 100%; height: 60px; line-height: 60px;
    }

    .info{
        width: 100%; height: 40px; line-height: 40px;
        display: flex; margin: 10px 0;
    }

    .info-wrap{
        height: 40px; display: flex; flex-wrap: nowrap;
        margin-right: 30px;
    }

    .info-wrap span{
        display: block; width: 110px;
    }

    .btn-group{
        margin-bottom: 20px;
    }

    button{
        height: 32px; line-height: 9px;
    }

</style>