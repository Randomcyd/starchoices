<template>
    <div id="test">
        <p class="title"><router-link to="/test">静态池自动检测工具</router-link> / <router-link to="/proinfo">新建</router-link></p>
        <div class="progress">
            <div class="line"></div>
            <div class="step">
                <span class="inow">1</span>
                <p class="now">填写项目信息</p>
            </div>
            <div class="step">
                <span>2</span>
                <p>数据上传</p>
            </div>
            <div class="step">
                <span>3</span>
                <p>完成</p>
            </div>
        </div>
        <div class="infoList">
            <div class="addProInfo">
                <span class="proClass"><i></i>资产类型：</span>
                <el-select v-model="value1" class="proInput" placeholder="请选择" ref="property">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label">
                    </el-option>
                </el-select>
            </div>
            <div class="addProName">
                <span class="proClass"><i></i>项目名称：</span>
                <el-input class="nameStep" v-model="input1" placeholder="资产方" ></el-input>
                <span>-</span>
                <el-input class="nameStep" v-model="input2" placeholder="资金方"></el-input>
                <span>-</span>
                <el-input class="nameStep" :disabled="true" v-model="input3" placeholder="资产类型"></el-input>
                <span>-</span>
                <el-input class="nameStep" v-model="input4" placeholder="年份"></el-input>
                <span>-</span>
                <el-input class="nameStep" v-model="input5" placeholder="期数"></el-input>
            </div>
            <div class="itemName">
                <span class="proClass"><i></i>项目名称：</span>
                <el-input class="itemInput" v-model="input6" placeholder="如：乐信乐花卡"></el-input>
            </div>
            <div class="next">
                <el-button  @click="nextAction()" type="primary">下一步</el-button>
            </div>
        </div>
        <transition name="fade">
            <el-alert
                v-if="this.warning"
                title="项目名称不能为空!"
                class="warning"
                type="warning"
                show-icon>
            </el-alert>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '个人消费贷款'
        }, {
          value: '选项2',
          label: '汽车抵押贷款'
        }],
        value1: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        warning:false
      }
    },
    methods:{
        nextAction(){
            if(!this.value1){
                this.warning = true
                setTimeout(() => {
                    this.warning = false
                }, 3000);
            }else{
                console.log(this.value1);
                this.$router.push('updata');
            }
        }
    }
}
    
</script>

<style scoped>
    .warning{
        width: 200px; position: absolute; top: 14px; left: 50%; 
    }

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
    
    .step{
        background: #fff; z-index: 1; display: flex; color: #bbb; font-size: 16px;
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

    .infoList{
        max-width: 800px;
        min-width: 500px;
        margin: 80px auto ;
    }

    .addProInfo{
        margin: 30px auto;
    }

    .proClass{
        padding-left: 10px; width: 100px; margin: 0 !important;
    }

    .proClass ::before{
        display: inline-block;
        margin-right: 4px;
        color: #f5222d;
        font-size: 14px;
        font-family: SimSun,sans-serif;
        line-height: 1;
        content: "*";
        font-style: normal;
    }

    .nameStep{
        width: 9%;
    }

    .addProName span{
        margin: 0 10px;
    }

    .itemInput,.proInput{
        width: 80%;
    }

    .addProName,.itemName,.next{
        margin: 30px auto;
    }
    .next{
        text-align: center;
    }

    .fade-enter-active, .fade-leave-active {
        transition: .5s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
</style>