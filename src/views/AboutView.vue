<template>
  <div class="about" id="horizen">
    <div>
      <side-menu></side-menu>
      <add-plan></add-plan>
      <!-- <date-calendar></date-calendar> -->
      <!-- <detail-tab></detail-tab> -->
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/static/SideMenu.vue'
// import DateCalendar from '@/components/addPlan/DateCalendar.vue'
// import DetailTab from '@/components/addPlan/DetailTab.vue';
import AddPlan from '@/components/AddPlan.vue';

export default {
  name : 'AboutView', //출처 이름
  components: {
    SideMenu,
    // DateCalendar,
    // DetailTab,
    AddPlan,
  },
};
</script>

<style>
#horizen{
  float: left;
}
</style>
