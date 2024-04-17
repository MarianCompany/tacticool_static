<template>
  <footer
    class="bottom-0 left-0 flex h-[286px] w-full flex-col items-center justify-center gap-3 gap-y-8 bg-footer px-10 text-center text-white lg:fixed lg:h-20 lg:flex-row lg:items-center lg:justify-between lg:py-0 z-20"
  >
    <div class="flex items-center justify-center gap-7 lg:justify-normal">
      <PanzerdogLogo />
      <MyGamesLogo class="h-[34px] w-[144px]" />
    </div>

    <div
      class="leading-0 max-w-[247px] text-sm font-normal lg:max-w-[483px] xl:max-w-[500px] 2xl:max-w-xl"
    >
      © 2024 Panzerdog. Published under MY.GAMES brand. All rights reserved.
      All trademarks are the property of their respective owners.
    </div>

    <div class="flex justify-between text-base lg:pl-[270px]">
      <RatingLogo />
    </div>
  </footer>
</template>

<script setup>
import MyGamesLogo from "../../assets/my-games-logo.vue";
import RatingLogo from "../../assets/rating.vue";
import PanzerdogLogo from "@/assets/panzerdog.vue";
</script>

<style></style>
