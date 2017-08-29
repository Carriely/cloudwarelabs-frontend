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
            <router-link to="/analysisbase/Hadoop" class="list-group-item">Hadoop大数据分析实验</router-link>
            <router-link to="/analysisbase/HDFS" class="list-group-item">HDFS</router-link>
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
      this.$router.push('/analysisbase/Hadoop')
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
