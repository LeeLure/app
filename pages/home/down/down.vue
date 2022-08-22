<template>
  <view>
   	<map :style="[{width:mapWidth,height: mapHeight}]" :controls="controls" :latitude="latitude" :longitude="longitude" :markers="covers" @tap="getadd" @controltap="controltapfunc" @regionchange="regionchange" @updated="updatedmap"></map>
   
   <text class="maptext-tex" :style="[{height: textheight,lineHeight:textheight}]">{{address}}</text>

  </view>
</template>

<script>
 import {getLocationInfo} from "@/util/Tool.js"
export default {  
  
    
}


</script>