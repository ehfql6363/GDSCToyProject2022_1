<template>
  <div class="about" id="horizen">
    <div>
      <date-calendar></date-calendar>
      <!-- <date-cal></date-cal> -->
      <side-menu></side-menu>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/static/SideMenu.vue'
// import DateCal from '@/components/addPlan/DateCal.vue';
import DateCalendar from '@/components/addPlan/DateCalendar.vue'

export default {
  name : 'AboutView', //출처 이름
  components: {
    SideMenu,
    // DateCal,
    DateCalendar,
},
};
</script>

<style>
#horizen{
  float: left;
}
</style>
