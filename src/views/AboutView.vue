<template>
  <div class="about" id="horizen">
    <div>
      <!-- <date-calendar></date-calendar> -->
      <detail-tab></detail-tab>
      <side-menu></side-menu>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/static/SideMenu.vue'
// import DateCalendar from '@/components/addPlan/DateCalendar.vue'
import DetailTab from '@/components/addPlan/DetailTab.vue';

export default {
  name : 'AboutView', //출처 이름
  components: {
    SideMenu,
    // DateCalendar,
    DetailTab,
},
};
</script>

<style>
#horizen{
  float: left;
}
</style>
