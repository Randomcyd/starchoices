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
                <span class="inow">2</span>
                <p class="now">数据上传</p>
            </div>
            <div class="step">
                <span>3</span>
                <p>完成</p>
            </div>
        </div>
        <div class="model">
            <div class="model-box">点击下载</div>
            <div class="model-box">点击下载</div>
            <div class="model-box">点击下载</div>
        </div>
        <div class="btn-group">
            <el-button class="back" @click="backAction()">上一步</el-button>
            <el-button type="primary" @click="subAction()" class="sub">提交</el-button>
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
        backAction(){
            this.$router.push('proinfo');
        },
        subAction(){
            this.$router.push('finish');
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
        justify-content: space-between;
    }

    .line{
        position: absolute; width: 100%; height: 16px; top: 0; left: 0;
        border-bottom: 2px solid #eee; z-index: 0;
    }

    .line-blue{
        position: absolute; width: 50%; height: 16px; top: 0; left: 0;
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

    .model{
        width: 100%; display: flex;justify-content: space-around;
        box-sizing: border-box; padding: 0 360px; overflow: hidden;
        margin: 40px 0;
    }

    .model-box{
        width: 200px; height: 100px ; border: 1px dashed #1890ff;
        text-align: center;border-radius: 5px; line-height: 100px;
    }

    .btn-group{
        width: 100%; text-align: center;
    }

    

</style>