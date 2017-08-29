<template>
  <div>
    <!--<router-link class="btn btn-success" to="/bigdataExperiment/create"><i class="glyphicon glyphicon-plus"></i> 新增实验</router-link>-->
    <table class="table table-hover">
      <thead>
      <tr>
        <th>实验名称</th>
        <th>描述</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="experiment in experiments">
        <th scope="row">{{experiment.title}}</th>
        <td>{{experiment.description}}</td>
        <td class="ops">
          <a :href="experiment.link" target="_blank"><i class="glyphicon glyphicon-pencil"></i></a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        experiments: [
          {title:"HDFS基本操作实验",description:"HDFS",link:"/static/amExperiments/dataPretreatment/R_dqa/R_dqa.html"},
          {title:"MapReduce基础实验",description:"MapReduce基础",link:"/static/amExperiments/dataPretreatment/svm/svm.html"},
          {title:"MapReduce高级特性实验",description:"MapReduce高级特性",link:"/static/amExperiments/dataPretreatment/R_dfa/R_dfa.html"},
          {title:"迭代式MapReduce程序开发实验",description:"迭代式MapReduce",link:"/static/amExperiments/dataPretreatment/svm/svm.html"},
          {title:"Hive基本操作实验",description:"Hive",link:"/static/amExperiments/dataPretreatment/R_scf/R_scf.html"},
        ]
      }
    },
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
