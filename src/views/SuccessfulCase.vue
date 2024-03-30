<template>
  <div class="text-2xl mb-6">日本留学课程介绍</div>
  <Row :gutter="[24, 24]">
    <Col v-for="item of data" :md="12" :lg="8" :xl="8" :sm="24" :xs="24">
      <div class="bg-blue-400 px-6 rounded-md">
        <div class="text-lg py-6 flex justify-between">
          <span>{{ item.name }}</span>
          <span>祝！！</span>
        </div>
        <div class="text-xl py-6 text-center">{{ item.school }}</div>
        <div class="text-lg py-6">{{ item.part }}</div>
      </div>
    </Col>
  </Row>

  <div class="text-xl pb-4 pt-6 border-b border-gray-300">许同学</div>
  <Row :gutter="[24, 24]">
    <Col :md="12" :lg="12" :xl="12" :sm="24" :xs="24">
      <p class="text-lg pt-4 pb-2">背景</p>
      <p class="text-base">
        1.在国内是理科生，而上海的高考是以3+X为主，她当时选择的是化学。<br />
        2.对文科几乎没有基础的如怡，面对历史、地理和政治等科目时更是乱了阵脚
      </p>
      <p class="text-lg pt-4 pb-2">在日本的日子</p>
      <p class="text-base">
        1.每天早出晚归，参加语言学校和塾的课程之外，便几乎泡在塾的自习室和图书馆里
        <br />
        2.塾里一下课，她就用几个小时去梳理。之后把之前学的内容穿插到一起。<br />
        3.学好日语和英语，考出会计资格证。
      </p>
    </Col>
    <Col :md="12" :lg="12" :xl="12" :sm="24" :xs="24">
      <img class="mt-6" :src="img10" alt="" />
    </Col>
  </Row>
  <div class="text-xl pb-4 pt-6 border-b border-gray-300">黄同学</div>
  <Row :gutter="[24, 24]">
    <Col :md="19" :lg="19" :xl="19" :sm="24" :xs="24">
      <p class="text-lg pt-4 pb-2">背景</p>
      <p class="text-base">
        1.正值叛逆期的他天天去网吧，成绩便从此一落千丈。<br />
        2.初三毕业那年，黄子涵对父母坦露了想去日本留学的心声
      </p>
      <p class="text-lg pt-4 pb-2">在日本的日子</p>
      <p class="text-base">
        1.他对自己每个阶段都设立了一个目标，并围绕这个目标制定相应的学习计划和安排。<br />
        2.通过读报，黄子涵不但积累了大量的词汇，也打开了写作的思路，他的写作能力在短时间内得到了大幅提升。
      </p>
    </Col>
    <Col :md="5" :lg="5" :xl="5" :sm="24" :xs="24">
      <img class="mt-6 w-full" :src="img11" alt="" />
    </Col>
  </Row>
  <div class="text-2xl py-4">大学备考计划</div>
  <div class="flex justify-center">
    <img :src="img12" alt="" />
  </div>
</template>
<script setup>
import img10 from '@/assets/10.png';
import img11 from '@/assets/11.png';
import img12 from '@/assets/12.png';
import { Row, Col } from 'ant-design-vue';

const data = [
  { name: '王同学', school: '早稻田大学', part: '人间心理学部合格' },
  { name: '王同学', school: '早稻田大学', part: '人间心理学部合格' },
  { name: '王同学', school: '早稻田大学', part: '人间心理学部合格' },
  { name: '王同学', school: '早稻田大学', part: '人间心理学部合格' },
  { name: '王同学', school: '早稻田大学', part: '人间心理学部合格' },
  { name: '王同学', school: '早稻田大学', part: '人间心理学部合格' }
];
</script>
