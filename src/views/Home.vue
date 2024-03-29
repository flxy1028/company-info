<template>
  <Row :gutter="32">
    <Col :sm="24" :xs="24" :md="12" :lg="12" :xl="12">
      <div class="flex flex-col items-center mb-8">
        <span class="text-2xl p-6"> 菲律宾留学</span>
        <img :src="flbImg" />
      </div>
    </Col>
    <Col :sm="24" :xs="24" :md="12" :lg="12" :xl="12">
      <div class="flex flex-col items-center mb-8">
        <span class="text-2xl p-6"> 日本留学</span>
        <img :src="rbImg" />
      </div>
    </Col>
  </Row>
  <Row :gutter="[24, 24]">
    <Col :md="12" :lg="12" :xl="12" :sm="24" :xs="24">
      <h3 class="text-2xl px-8 pb-8">菲律宾：沉浸式英语学习</h3>
      <p class="text-base indent-6 pb-4">
        可能有些人会对菲律宾留学感到惊讶。但实际上，由于历史上曾经属于美国的统治，菲律宾广泛使用英语作为公用语言。因此，许多菲律宾人都能流利地讲英语，在亚洲他们的英语发音被认为是最清晰的。在菲律宾的语言学校，老师通常是受过良好教育、拥有大学学位的菲律宾人，相比于美国或英国等传统的留学国家，菲律宾的留学成本要低得多。
      </p>
      <p class="text-base pb-4">
        在日本或欧美留学，经济压力常常使得学生难以获得一对一的教学体验。而在菲律宾，由于整体人工成本较低，学生可以以更实惠的价格，享受全天候的高质量一对一英语授课。
      </p></Col
    >
    <Col :md="12" :lg="12" :xl="12" :sm="24" :xs="24"
      ><img :src="flbMapImg"
    /></Col>
    <Col :md="12" :lg="12" :xl="12" :sm="24" :xs="24">
      <h3 class="text-2xl px-8 pb-8">日本留学：樱花和风二次元</h3>
      <p class="text-base indent-6 pb-4">
        作为世界上科技和文化并重的国家，一直是国际学生追求高质量教育的热门目的地。以独特的教育体系、历史悠久的大学和领先的科技研究而闻名，日本提供了一系列从语言学习到高等教育的留学机会。
      </p>
      <p class="text-base pb-4">
        留学日本，学生不仅可以在日常生活中学习和实践日语，还可以体验到日本丰富的文化和传统。从春季的樱花盛开到秋天的红叶翩翩，日本四季分明的自然景观与其现代城市生活形成了独特的对比。
      </p>
      <p class="text-base pb-4">
        教育方面，日本的大学在工程、技术、商业管理等领域提供了世界级的教学和研究机会。此外，日本的艺术和设计课程也享有高声誉。国际学生在这里能够获得理论和实践相结合的教育。
      </p>
      <p class="text-base pb-4">
        留学成本方面，尽管日本的生活费用相对较高，但许多大学提供奖学金和其他财务援助来帮助国际学生。此外，日本政府和私人机构也为有才华的外国学生提供了多种奖学金计划。
      </p>
      <p class="text-base pb-4">
        总的来说，日本留学是一个深入了解日本文化、提升学术水平并开拓国际视野的绝佳机会。无论你是对语言、文化、艺术还是科技感兴趣，日本都能提供一流的学习环境，让你的留学经历不仅仅是学术上的提升，更是一次生命中的宝贵经历。
      </p>
    </Col>
    <Col :md="12" :lg="12" :xl="12" :sm="24" :xs="24"
      ><img :src="rbMapImg"
    /></Col>
    <Col :md="12" :lg="12" :xl="12" :sm="24" :xs="24"
      ><img class="cursor-pointer hover:opacity-70" :src="img1"
    /></Col>
    <Col :md="12" :lg="12" :xl="12" :sm="24" :xs="24"
      ><img class="cursor-pointer hover:opacity-70" :src="img2"
    /></Col>
    <Col :md="12" :lg="12" :xl="12" :sm="24" :xs="24"
      ><img class="cursor-pointer hover:opacity-70" :src="img3"
    /></Col>
    <Col :md="12" :lg="12" :xl="12" :sm="24" :xs="24"
      ><img class="cursor-pointer hover:opacity-70" :src="img4"
    /></Col>
  </Row>
</template>
<script setup>
import flbImg from '@/assets/flb.jpg';
import rbImg from '@/assets/rb.jpg';
import flbMapImg from '@/assets/flbMap.png';
import rbMapImg from '@/assets/rbMap.png';
import img1 from '@/assets/1.png';
import img2 from '@/assets/2.png';
import img3 from '@/assets/3.png';
import img4 from '@/assets/4.png';
import { Row, Col } from 'ant-design-vue';
import { defineOptions } from 'vue';
</script>
