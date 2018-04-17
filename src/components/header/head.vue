<template>
  <ul>
  <li v-for="item of items">
    {{item}}
  </li>
  </ul>
</template>

<script>

    export default {
      data(){
        return{
            items: [
               'Foo' ,
               'Bar'
            ]
        }
      },
      method(){

      }
    }
</script>

<style  lang="scss" scoped="" >
  @import '../../style/mixin';
  #head_top{
    z-index: 100;
    float:left;
    position: fixed;
    background-color: $blue;
    @include wh(100%,1.5rem);
  }
  .head_goback{
    left: 0.4rem;
    @include wh(0.6rem, 1rem);
    margin-top: 0.5rem;
  }
  .head_right{
    right: 1rem;
    @include sc(0.65rem, #fff);
    @include ct;
    .head_login{

      color: #fff;
    }
  }
</style>
