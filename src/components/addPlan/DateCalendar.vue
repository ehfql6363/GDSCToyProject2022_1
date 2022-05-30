<template>
  <div class="section text-center" id="sort">
    <h2 class="h2">일정 정하기</h2>
    <div class="flex flex-col items-center mb-6">
      <v-date-picker
        trim-weeks 
        v-model="date"
        locale="ko"
        mode="dateTime"
        :timezone="timezone"
        style="width:900px;height:600px"
        />
    </div>
  </div>
</template>



<script>
export default {
  data() {
    const date = new Date();
    return {
      date,
      timezone: '',
    };
  },
};
</script>

<style>
#sort{
    width: 100vw;
    /* display: flex; */
    justify-content: center;
}
.vc-weeks{
  height: 500px;
  font-size: 30px !important;
}
span.vc-day-content.vc-focusable {
  font-size: 20px;
}
div.vc-time-picker.vc-bordered{
  justify-content: center;
}
div.vc-date{
  justify-content: center;
}
</style>