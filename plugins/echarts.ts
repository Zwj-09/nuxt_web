// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import { use } from 'echarts/core';
// 引入 CanvasRenderer 或者 SVGRenderer 是，这必须的一步
import { CanvasRenderer } from 'echarts/renderers';
// 引入饼图
import { PieChart } from 'echarts/charts';
// 按需引入组件
import { LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components';

export default defineNuxtPlugin(() => {
  // 注册引入的组件
  use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent]);
});
