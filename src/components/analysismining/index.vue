<template>
  <div>
    <common-header></common-header>
    <div class="container">
      <div class="page-header">
        <h4>数据分析与挖掘</h4>
      </div>
      <div class="row">
        <div class="col-md-2">
          <div class="list-group">
            <router-link to="/analysismining/dataPretreatment" class="list-group-item">数据探索与预处理</router-link>
            <router-link to="/analysismining/datamining" class="list-group-item">R语言数据挖掘实验</router-link>
            <router-link to="/analysismining/pythonda" class="list-group-item">Python数据分析实验</router-link>
            <!--<router-link to="/bigdataexperiment/language" class="list-group-item">开发环境语言学习</router-link>
            <router-link to="/bigdataexperiment/dm" class="list-group-item">数据分析与挖掘</router-link>
            <router-link to="/bigdataexperiment/bigdatae" class="list-group-item">大数据技术基础实验</router-link>
            <router-link to="/bigdataexperiment/bdm" class="list-group-item">基于大数据的数据分析与挖掘</router-link>
            <router-link to="/bigdataexperiment/caseAnalysis" class="list-group-item">基于大数据的案例分析</router-link>-->
          </div>
        </div>
        <div class="col-md-10">
          <router-view></router-view>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  import CommonHeader from '../CommonHeader.vue'
  import CommonFooter from '../CommonFooter.vue'
  export default {
    components: {CommonHeader},
    data () {
      return {
        cloudwares: [],
        users: []
      }
    },
    created() {
      this.$router.push('/analysismining/dataPretreatment')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    width: 80px;
    height: 80px;
    float: left;
  }

  h5 {
    font-size: 18px;
    padding-left: 100px;
    font-weight: bold;
  }

  .cloudware-item {
    height: 240px;
  }

  .title {
    height: 100px;
  }

  .info {
    height: 60px;
    overflow: hidden;
  }

  .new-cloudware .panel-body {
    position: relative;
    height: 100%;
  }

  .new-cloudware i {
    font-size: 42px;
  }

  .new-cloudware .text {
    font-size: 18px;
  }

  .new-cloudware .plus {
    display: block;
    margin-top: 60px;
    text-align: center;
    text-decoration: none;
  }
</style>
