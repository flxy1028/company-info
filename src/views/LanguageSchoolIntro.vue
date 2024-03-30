<template>
  <div class="text-2xl font-bold text-black py-4">日本语言学校介绍</div>
  <p class="indent-4 text-base">
    对于绝大多数国内中专、高中毕业，要来日本读学部本科的学生，或者国内大专毕业但想来日本读本科的学生来说，语言学校基本就是必经之路。
    一方面是这些学生日语水平确实有限，刚刚高中毕业，大部分人都没有太好的日语基础，必须来日本语言学校进行语言学习和加强；
  </p>
  <p class="indent-4 text-base">
    另一方面，是这些学生要参加统一的日本留学考试（EJU），要学习和复习各种文理科知识，还有数学和日语的应试，很多人都需要在日本上各种塾来查缺补漏，加强应试技能。还有个问题是这个考试在国内是没有办法参加的，只能在日本或者去中国香港等地区考，与其去其他地方折腾，不如在日本考试安心，况且还有日语大环境。
  </p>
  <p class="indent-4 text-base">
    当然，这部分人中，有人想在国内学好日语，上网课准备EJU的科目考试，然后到时候直接飞出来考试。虽然这种方法看似节省一些钱，但是却伴随着各种麻烦事，再加上语言环境或者个人学习的自控能力等要素来看的话，反而有点得不偿失的感觉。
  </p>
  <div class="text-2xl font-bold text-black py-4">语言学校是什么？</div>
  <p class="indent-4 text-base mb-6">
    日本语言学校是对母语不是日语的人进行日语教育的学校。到日本留学一般必须先到语言学校学习。因为大多数日本优秀国公立院校不直接在中国招生，而是通过日本语言学校来招收留学生的。语言学校是学校法人，民法法人，株式会社，任意团体，个人等设立的日语教育机构，其经营母体各有不同。日本全国日语语言学校超过500所。入学通常在1月，4月，7月，10月，一年4次。
  </p>

  <Row :gutter="[24, 24]">
    <Col :md="12" :lg="12" :xl="12" :sm="24" :xs="24">
      <div class="border border-gray-300 h-full rounded-md">
        <div class="text-xl font-bold text-center p-4 bg-blue-400 text-white">
          千驮谷日本语学校
        </div>
        <img class="w-full" :src="img13" alt="" />
        <p class="text-lg font-bold text-black pt-3 px-2 pb-2">
          文科精品小班教学，全面的专业类课程+这俩学校相信想升学的各位，尤其是国内本科想去日本考研的都应该是耳熟能详吧。两所学校都拥有悠久的历史，对学生的把控也是很严格，常作为两所“尖子生校”被放在一起比较
        </p>
      </div>
    </Col>
    <Col :md="12" :lg="12" :xl="12" :sm="24" :xs="24">
      <div class="border border-gray-300 h-full rounded-md">
        <div class="text-xl font-bold text-center p-4 bg-blue-400 text-white">
          ISI日本语学校
        </div>
        <img class="w-full" :src="img14" alt="" />
        <p class="text-lg font-bold text-black pt-3 pl-3 pr-2 pb-23">
          教学质量是一方面，教学环境也很重要，环境好，心里也敞亮，学习更有动力。
          ISI日本语学校的教学楼是那种落地透明玻璃式的楼体，光照非常充足，进去就给人满满的正能量，同时楼内色调也是明亮的大撞色风格，在这样的教学楼里学习真是开心！
        </p>
      </div>
    </Col>
    <Col :md="12" :lg="12" :xl="12" :sm="24" :xs="24">
      <div class="border border-gray-300 h-full rounded-md">
        <div class="text-xl font-bold text-center p-4 bg-blue-400 text-white">
          东京中央日本语学校
        </div>
        <img class="w-full" :src="img15" alt="" />
        <p class="text-lg font-bold text-black pt-3 px-2 pb-2">
          这个学校不属于宣传推广很猛烈的，交通很方便，距离信浓町车站37M，步行1分钟即到。邻近多个大型公园，环境优美。且距离国立竞技场、棒球场很近，在这里留学读书的同时，还可以感受到体育的魅力。
          学校设有专业的升学辅导：针对留考设置考前特别辅导班，以及进行各种入学考试辅导。同时学校与日本国内多所大学及专门学院开展了友好合作，重磅推出名牌大学与名牌大学院（硕士）的升学项目，如果满足条件可推荐入学。同时，学校还针对想要就职的学生开设就职指导课程，满足学生的就职需求。
        </p>
      </div>
    </Col>
  </Row>
</template>
<script setup>
import { Row, Col } from 'ant-design-vue';
import img13 from '@/assets/13.png';
import img14 from '@/assets/14.png';
import img15 from '@/assets/15.png';
</script>
