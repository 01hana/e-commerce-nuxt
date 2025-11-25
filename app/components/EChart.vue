<script setup lang="ts">
import VChart from 'vue-echarts';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart, BarChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DataZoomComponent,
} from 'echarts/components';

use([
  CanvasRenderer,
  LineChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DataZoomComponent,
]);

defineProps<{
  height?: string | number;
}>();

defineExpose({
  getInstance: () => chartRef.value?.chart,
});

const chartRef = ref<any>();
</script>

<template>
  <VChart ref="chartRef" :style="{ height: height || '300px', width: '100%' }" autoresize />
</template>

<style scoped></style>
