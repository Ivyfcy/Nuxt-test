<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col
        :span="3"
        class="left">
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
          alt="美团">
      </el-col>
      <el-col
        :span="15"
        class="center">
        <div class="wrapper">
          <el-input
            v-model="search"
            placeholder="搜索商店或地点"
            @blur="blur"
            @focus="focus"/>
          <button class="el-button el-button--primary">
            <i class="el-icon-search"/>
          </button>
          <dl
            v-if="isHotPlace"
            class="hotPlace"
          >
            <dt>热门搜索</dt>
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
          </dl>
          <dl
            v-if="isSearchList"
            class="searchList"
          >
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
          </dl>
        </div>
        <p class="suggset">
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link
              to="/"
              class="takeout">美团外卖
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="movie">猫眼电影
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="hotel">美团酒店
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="apartment">民宿/公寓
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="business">商家入驻
            </nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col
        :span="6"
        class="right"
      >
        <ul class="security">
          <li>
            <i class="refund"/>
            <p class="txt">随时退</p>
          </li>
          <li>
            <i class="single"/>
            <p class="txt">不满意免单</p>
          </li>
          <li>
            <i class="overdue"/>
            <p class="txt">过期退</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        search: '',
        isFocus: false
      }
    },
    computed:{
      isHotPlace:function () {
        return this.isFocus&&!this.search
      },
      isSearchList:function () {
        return this.isFocus&&this.search
      }
    },
    methods:{
      focus:function () {
        this.isFocus=true
      },
      blur:function () {
        let self=this
        setTimeout(function () {
          self.isFocus=false
        },200)

      }
    }
  }
</script>
<!--<script>-->
<!--import _ from "lodash";-->
<!--export default {-->
<!--data(){-->
<!--return {-->
<!--search: '', //当前输入框的值-->
<!--isFocus: false, //是否聚焦-->
<!--hotPlace: [], // 热门搜索数据-->
<!--searchList: [] // 搜索数据-->
<!--}-->
<!--},-->
<!--computed:{-->
<!--isHotPlace(){-->
<!--return this.isFocus && !this.search-->
<!--},-->
<!--isSearchList(){-->
<!--return this.isFocus && this.search-->
<!--}-->
<!--},-->
<!--methods: {-->
<!--focus(){-->
<!--this.isFocus = true-->
<!--},-->
<!--blur(){-->
<!--setTimeout(()=>{-->
<!--this.isFocus = false-->
<!--}, 200)-->
<!--},-->
<!--input: _.debounce(async function(){-->
<!--let self = this;-->
<!--let city = self.$store.state.geo.position.city.replace('市', '');-->
<!--self.searchList = [];-->
<!--let {status, data: {top}} = await self.$axios.get('/search/top', {-->
<!--params: {-->
<!--input: self.search,-->
<!--city-->
<!--}-->
<!--})-->
<!--self.searchList = top.slice(0, 10);-->
<!--}, 300)-->
<!--}-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--</style>-->
