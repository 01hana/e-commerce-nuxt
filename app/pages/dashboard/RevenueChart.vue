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
      '2000',
      '1000',
      '1500',
      '2000',
      '3000',
      '2500',
      '4000',
      '3500',
      '3000',
      '4500',
      '5000',
      '6000',
    ],
    xAxis: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  };

  charts.revenueChart(res);

  setLoading(false);
}
</script>

<template>
  <UCard class="p-4 rounded-xl ring-0 transition w-full">
    <template #header>
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-medium">月營收數據</h3>
        <VDatePicker :isYear="true" />
      </div>
    </template>

    <EChart ref="chartRef" />
  </UCard>
</template>

<style scoped></style>
