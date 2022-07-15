<template>
  <div>
    <h1>카카오 맵 test</h1>
    <div id="map"></div>
  </div>
</template>


<script>

export default {
  name: "KakaoMap",
  data() {
    return {
      map: null,
      markerPositions1:[
        { title: "카카오", latlng: new kakao.maps.LatLng(33.450705, 126.570677) },
        { title: "생태연못", latlng: new kakao.maps.LatLng(33.450936, 126.569477) },
        { title: "텃밭", latlng: new kakao.maps.LatLng(33.450705, 126.570677) },
        { title: "근린공원", latlng: new kakao.maps.LatLng(33.451393, 126.570738) },
      ],

      //화면에 표시되어 있는 marker들
      markers: [],
    }
  },
  mounted() {
    if(!window.kakao || !window.kakao.maps){
      //script 태그 객체
      const script = document.createElement("script");
      //src 속성을 추가하며 .env.local 에 등록한 service 키 활용
      script.src = '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey='+process.env.VUE_APP_KAKAOMAP_KEY;

      //document의 head에 script 추가
      document.head.append(script);

      /* global kakao */
      script.addEventListener("load", () => {
        kakao.maps.load(this.initMap);
      });
      document.head.appendChild(script);
    }else{
      // console.log("이미 로딩됨: ", window.kakao);
      this.initMap();
    }
  },
  methods: {
    initMap(){
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.2429362, 131.8624647, 16),
        level: 5,
      };
      this.map = new kakao.maps.Map(container, options);
    }
  },
}
</script>


<style scoped>
.test {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#map {
  width: 100%;
  height: 500px;
  border: 1px #a8a8a8 solid;
}
</style>