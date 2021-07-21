<template>
    <div id="top-bar">
        <el-button type="primary" class="back" @click="toggleAction(index)">&lt;</el-button>
        <el-dropdown>
            <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
    data(){
        return{
            index:0
        }
    },
    methods:{
        toggleAction(index){
            if (this.index==0) {
                this.$pubsub.$emit('toggleStates',index);
                this.index=1;
            }else{
                this.$pubsub.$emit('toggleStates',index);
                this.index=0;
            }
        }
    }
}
</script>

<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

  .el-dropdown{
      float: right;
  }

#top-bar{
    width: 100%; height: 64px; line-height: 64px;
    padding: 0 30px; box-sizing: border-box;
     background: #fff;
}

.back{
    display: block; float: left; margin-top: 12px;
}

.user{
    display: block; float: right;
}
</style>