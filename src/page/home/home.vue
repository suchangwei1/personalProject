<template>
  <div >
    <headTop></headTop>
      <div class="home_current_city">当前城市：{{guessCity}}
        <section>
          <ul v-for="(value) in hotcity" >
              <router-link tag="li"  to="/" class="letter_classify_li">
                {{value.name}}
              </router-link>
          </ul>
        </section>
    <section >
      <ul >
        <li v-for="(value, key, index) in sortGroupList" :key="key"  >
          <h4 class="city_title clear">{{key}}
            <span v-if="index == 0">（按字母排序）</span>
          </h4>
          <ul class="groupcity_name_container citylistul " >
            <li v-for="item in value" class="ellipsis">
              <router-link  to="/" class="home_router_li">
                {{item.name}}
             </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </section>
      </div>
  </div>

</template>
<script>
  // 在单独构建的版本中辅助函数为 Vuex.mapState
  import { mapState,mapMutations,mapActions  } from 'vuex'
  import {cityGuess, hotcity, groupCity} from '../../service/getData'
  import  headTop from "../../components/header/head.vue"
  export default {
    data(){
      return{
        guessCity: '',   //当前城市
        guessCityid: '', //当前城市id
        hotcity: [],     //热门城市列表
        groupCity: {},   //所有城市列表
      }
    },
    mounted(){
      //获取当前热门城市
      hotcity().then(res=>{
        console.log("res",res);
        this.hotcity=res;
      })
      // 获取当前城市
      cityGuess().then(res => {
        this.guessCity = res.name;
        this.guessCityid = res.id;
      })
      groupCity().then(res =>{

        this.groupCity=res;
      })
      },
        computed:{
        //将所有城市的首字母放在一个数组里。以便分组展示
       sortGroupList:function () {
         let groupList={};
         console.log(this.groupCity[String.fromCharCode(65)]);
         for(let i=65;i<90;i++){
           if(this.groupCity[String.fromCharCode(i)]){
             groupList[String.fromCharCode(i)]=this.groupCity[String.fromCharCode(i)];
           }
         }
         console.log("groupList",groupList);
         return groupList;
       }
      },
    components:{
      headTop
   }
  }
</script>

<style  lang="scss" scoped="" >
  @import '../../style/mixin';
  .home_current_city{
    position: relative;
    top:2rem;
  }
  .citylistul{
    li{
      float: left;
      text-align: center;
      @include wh(25%, 1.75rem);
      @include font(0.6rem, 1.75rem);
    }
  }
  .city_title{
    font-weight: 400;
    @include font(0.55rem, 1.45rem, "Helvetica Neue");
    span{
      @include sc(0.475rem, #999);
    }
  }
  .home_router_li{
    color: #666;
  }
  .letter_classify_li{
    float: left;
    margin: 0.7rem;
    @include sc(0.8rem, $blue);
  }
</style>
