<template>
       <ul id="turn-page">
              <li class="prev-page" :class="{'not-allow': nowPage == 1}" @click="turnPage(-1)">&lt;</li>  
               <!-- 页数小于等于7 -->
               <template v-if="totalPage <=7">
                  <li class="num" 
                     v-for="i in totalPage" 
                     :key="i"
                     :class="{'cur-page': i==nowPage}"
                     @click="turnPage(i)">{{i}}</li>
               </template>
               <!-- 页数大于7 -->
               <!-- NowPage <= 4  -->
               <template v-else>
                   <template v-if="nowPage <= 4">
                  <li class="num" v-for="i in 6" :key="i" @click="turnPage(i)" :class="{'cur-page': nowPage == i}">{{i}}</li>
               </template>
                <template v-if="nowPage > 4">
                   <li class="num" @click="turnPage(1)">1</li>
                   <span>...</span>
               </template>
                <template v-if="nowPage>4 && nowPage + 4 <= totalPage">
                   <li class="num" v-for="i in 5" :key="i" :class="{'cur-page': i == 3}">{{nowPage - 3 + i}}</li>
               </template>
                <template v-if="nowPage + 4 <= totalPage">
                   <span>...</span>
                   <li class="num" @click="turnPage(totalPage)">{{totalPage}}</li>
               </template>
                <template v-if="nowPage + 4 > totalPage">
                  <li class="num" v-for="i in 6" :key="i" @click="turnPage(totalPage-6+i)" :class="{'cur-page': nowPage == totalPage-6+i}">{{totalPage-6+i}}</li>
               </template>
               </template>
              <li class="next-page" :class="{'not-allow': nowPage == totalPage}" @click="turnPage(0)" >&gt;</li> 
      </ul>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
 
   methods: {
      turnPage(n) {
         if((this.nowPage == 1 && n == -1) || (this.nowPage == this.totalPage && n == 0) || (this.nowPage == n)) {
         } else {
            this.getStuList(n) 
         }
      },
      ...mapActions(['getStuList'])
   },
   computed: {
      ...mapState(['totalPage', 'nowPage'])
   }
}
</script>

<style>
  .not-allow {
     cursor: not-allowed!important;
  }
  #turn-page>li {
     user-select: none;
  }
</style>


