<script setup lang="ts">
import Charts from '~/libs/echart';
import type { ECharts as EChartsInstance } from 'echarts';

const [loading, setLoading] = useAppState(false);

const chartRef = ref<{
  getInstance: () => EChartsInstance;
} | null>(null);

onMounted(() => {
  if (chartRef.value) setChart();
});

async function setChart() {
  const instance = chartRef.value!.getInstance();

  const charts = new Charts(instance);

  setLoading(true);

  const res = {
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310],
      },
    ],
    xAxis: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  };

  charts.growthChart(res);

  setLoading(false);
}
</script>

<template>
  <UCard class="p-4 rounded-xl ring-0 transition w-full">
    <template #header>
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-medium">月成長數據</h3>
        <VDatePicker :isMonth="true" />
      </div>
    </template>

    <EChart ref="chartRef" />
  </UCard>
</template>

<style scoped></style>
