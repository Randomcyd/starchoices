<template>
    <div id="test">
        <p class="title"><router-link to="/test">静态池自动检测工具</router-link> / <router-link to="/proinfo">新建</router-link></p>
        <div class="progress">
            <div class="line"></div>
            <div class="line-blue"></div>
            <div class="step">
                <span class="ifinish">√</span>
                <p class="finish">填写项目信息</p>
            </div>
            <div class="step">
                <span class="ifinish">√</span>
                <p class="finish">数据上传</p>
            </div>
            <div class="step">
                <span class="inow">3</span>
                <p class="now">完成</p>
            </div>
        </div>
        <h1 class="title">已完成上传</h1>
        <div class="btn">
            <el-button type="primary" @click="backHome()">返回首页</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        
      }
    },
    methods:{
        backHome(){
            this.$router.push('test')
        }
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

    .progress{
        width: 100%; height: 32px; line-height: 32px; display: flex; position: relative;
        justify-content: space-between; margin-bottom: 140px;
    }

    .line{
        position: absolute; width: 100%; height: 16px; top: 0; left: 0;
        border-bottom: 2px solid #eee; z-index: 0;
    }

    .line-blue{
        position: absolute; width: 100%; height: 16px; top: 0; left: 0;
        border-bottom: 2px solid #1890ff; z-index: 1;
    }
    
    .step{
        background: #fff; z-index: 2; display: flex; color: #bbb; font-size: 16px;
    }

    .step span{
        display: block; width: 32px; height: 32px; border-radius: 50%;
        border: 1px solid #bbb; text-align: center; line-height: 32px;
        color: #bbb; margin: 0 10px;
    }

    .step p{
        margin-right: 10px;
    }

    .step .inow{
        background: #1890ff; color: #fff; border: 0;
    }

    .step .now{
        color: #000;
    }

    .step .ifinish{
        color:#1890ff; border: 1px solid #1890ff;
    }

    .step .finish{
        color: #000;
    }

    .btn{
        width: 100%; text-align: center; margin-top: 100px;
    }

    .title{
        width: 100%; text-align: center; color: #1890ff;
    }

</style>