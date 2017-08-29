<template>
  <div>
    <div class="navbar navbar-default">
      <div class="container" style="width: 100%">
        <div class="navbar-header">
          <!--<a href="../" class="navbar-brand">CloudwareLabs</a>-->
          <!--<button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">-->
            <!--<span class="icon-bar"></span>-->
            <!--<span class="icon-bar"></span>-->
            <!--<span class="icon-bar"></span>-->
          <!--</button>-->
          <img src="../assets/whutlogo.png">
        </div>
        <div class="navbar-collapse collapse" id="navbar-main">
          <ul class="nav navbar-nav">
            <!--router-link tag="li" to="/instances"><a>云件实例</a></router-link>-->
            <!--<router-link tag="li" to="/cloudwares"><a>云件服务</a></router-link>-->
            <!--<route<-link tag="li" to="/bigdatacourse"><a>课程列表</a></router-link>-->
            <!--<router-link tag="li" to="/bigdataExperiment"><a>实验列表</a></router-link>-->
            <router-link tag="li" to="/bigdataExperiment"><a>编程语言学习</a></router-link>
            <router-link tag="li" to="/analysismining"><a>数据分析与挖掘</a></router-link>
            <router-link tag="li" to="/analysisbase"><a>大数据分析基础</a></router-link>
            <router-link tag="li" to="/biganalysismining"><a>大数据分析与挖掘</a></router-link>
            <router-link tag="li" to="/exampleanaly"><a>基于大数据的案例分析</a></router-link>
            <router-link tag="li" to="/datasrc"><a>数据源及数据描述</a></router-link>
            <router-link tag="li" to="/exercise"><a>练兵场</a></router-link>

            <router-link tag="li" to="/management" v-if="user.role == 'admin'"><a>系统管理</a></router-link>
            <router-link tag="li" to="/student" v-if="user.role == 'user'"><a>我的作业</a></router-link>
            <router-link tag="li" to="/teacher" v-if="user.role == 'teacher'"><a>作业管理</a></router-link>
            <li><a target="_blank" href="//59.69.103.174:84">使用帮助</a></li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#" id="download" aria-expanded="false">{{user.username}} <span class="caret"></span></a>
              <ul class="dropdown-menu" aria-labelledby="download">
                <li><router-link to="/userinfo">个人信息</router-link></li>
                <li class="divider"></li>
                <li><a href="#" @click="logout()">退出</a></li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'common-header',
    data () {
      return {
        user: {}
      }
    },
    created() {
      this.$http.get('users/current').then(resp => {
        this.user = resp.body
      })
    },
    methods: {
      logout() {
        localStorage.removeItem('token')
        this.$router.push('/')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
