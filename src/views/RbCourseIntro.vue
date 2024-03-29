<template>
  <div class="text-2xl mb-6">日本留学课程介绍</div>
  <Row :gutter="[24, 24]">
    <Col :md="12" :lg="12" :xl="12" :sm="24" :xs="24">
      <div class="border border-gray-300 h-full rounded-md">
        <div class="text-xl text-center p-4 bg-blue-400 text-white">
          大学院精品课程
        </div>
        <img class="w-full" :src="img9" alt="" />
        <p class="text-lg pt-3 px-2 pb-2">
          文科精品小班教学，全面的专业类课程+丰富的语言类课程，带你快速进入备考节奏；课程设置合理，无缝接轨日本院校大学院春秋季入试时间，为你的升学路保驾护航。
        </p>
      </div>
    </Col>
    <Col :md="12" :lg="12" :xl="12" :sm="24" :xs="24">
      <div class="border border-gray-300 h-full rounded-md">
        <div class="text-xl text-center p-4 bg-blue-400 text-white">
          学部留考精品课程
        </div>
        <img class="w-full" :src="img5" alt="" />
        <p class="text-lg pt-3 pl-3 pr-2 pb-23">
          参考国际教育标准，基于中日教育间的差异，打造“教-学-练-测-评”学习闭环，以科学的课程安排、进程管理、结果把控体系，帮助学生培养良好的学习习惯，提高知识吸收及活用能力。
        </p>
      </div>
    </Col>
    <Col :md="12" :lg="12" :xl="12" :sm="24" :xs="24">
      <div class="border border-gray-300 h-full rounded-md">
        <div class="text-xl text-center p-4 bg-blue-400 text-white">
          艺术: 美术+音乐课程
        </div>
        <img class="w-full" :src="img8" alt="" />
        <p class="text-lg pt-3 px-2 pb-2">
          不仅为日本艺术留学生提供全方位的一站式留学升学服务，更提供多元化的美学素质培养。
        </p>
      </div>
    </Col>

    <Col :md="12" :lg="12" :xl="12" :sm="24" :xs="24">
      <div class="border border-gray-300 h-full rounded-md">
        <div class="text-xl text-center p-4 bg-blue-400 text-white">
          JLPT日语课程
        </div>
        <img class="w-full" :src="img7" alt="" />
        <p class="text-lg pt-3 px-2 pb-2">
          从基础语法到日常对话，全方位提升你的日语能力。
        </p>
      </div>
    </Col>
    <Col :md="12" :lg="12" :xl="12" :sm="24" :xs="24">
      <div class="border border-gray-300 h-full rounded-md">
        <div class="text-xl text-center p-4 bg-blue-400 text-white">
          SGU项目
        </div>
        <img class="w-full" :src="img6" alt="" />
        <p class="text-lg pt-3 px-2 pb-2">
          沉淀8年教研经验，全新升级SGU项目产品。从申请痛点难点着手，解决申请疑难，提供独家阶段式一体化申请服务。
        </p>
      </div>
    </Col>
  </Row>
</template>
<script setup>
import img5 from '@/assets/5.png';
import img6 from '@/assets/6.png';
import img7 from '@/assets/7.png';
import img8 from '@/assets/8.png';
import img9 from '@/assets/9.png';
import { Row, Col } from 'ant-design-vue';
</script>
