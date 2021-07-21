<template>
    <div id="side-bar" ref='sideBar' :class="{toggle:this.index==0}">
        <div id="logo">
        </div>
        <ul class="list" ref='item'>
            <li class="option" :class="{active:activeIndex==0,showIcon:index==0}" @click="changeAction(0),movePage('test')"><i class="el-icon-edit"></i><span v-if="index==1" class="item-name">静态池自动检测工具</span></li>
            <li class="option" :class="{active:activeIndex==1,showIcon:index==0}" @click="changeAction(1),movePage('test1')"><i class="el-icon-share"></i><span v-if="index==1" class="item-name">抽样尽调工具</span></li>
            <li class="option" :class="{active:activeIndex==2,showIcon:index==0}" @click="changeAction(2),movePage('test2')"><i class="el-icon-delete"></i><span v-if="index==1" class="item-name">建模机器人</span></li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            activeIndex:0,
            index:1,
        }
    },
    methods:{
        changeAction(index){
            this.activeIndex = index;
        },
        movePage(name){
            this.$router.push(name);
        }
    },
    mounted(){
        this.$pubsub.$on('toggleStates',(index)=>{
            this.index = index;
        })
    }
}
</script>

<style scoped>
    #side-bar{
        width: 200px;background: #001529;
        height: 100%; color: #fff; transition: .5s;
    }

    .toggle{
        width: 100px !important;
    }

    #logo{
        width: 168px; height: 32px; margin: 16px; box-sizing: border-box;
        background: url("../../public/icon.png") no-repeat; background-size: 100% 100%;
    }

    .list{
        display: flex; flex-wrap: wrap;
    }

    .item-name{
        margin-left: 8px; font-size: 14px;
    }

    .option{
        width: 100%; padding: 0 20px; margin: 4px 0;
        height: 40px; line-height: 40px; text-align: left;
        opacity: .6; transition: .4s; overflow: hidden;
    }

    .option:hover {
        opacity: 1;
    }

    .active{
        background: #1890ff;
        opacity: 1;
    }

    .showIcon{
        text-align:center;
    }

</style>