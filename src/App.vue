<template>
  <div
    class="h-16 w-screen bg-gray-100 fixed top-0 left-0 flex justify-center cursor-pointer text-lg z-50"
  >
    <img class="h-9 self-center absolute left-6" :src="iyalalogo" alt="" />
    <template v-if="!isMobile">
      <div
        @click="handleMenuClick({ key: 'Home' })"
        class="p-6 flex items-center"
      >
        首页
      </div>
      <Dropdown>
        <template #overlay>
          <Menu @click="handleMenuClick">
            <MenuItem key="RbCourseIntro"> 课程介绍 </MenuItem>
            <MenuItem key="SuccessfulCase"> 成功案例 </MenuItem>
            <MenuItem key="LanguageSchoolIntro"> 语言学校介绍 </MenuItem>
          </Menu>
        </template>
        <div class="p-6 flex items-center">
          日本留学专区 <DownOutlined class="text-xs ml-1" />
        </div>
      </Dropdown>
      <Dropdown>
        <template #overlay>
          <Menu @click="handleMenuClick">
            <MenuItem key="CourseIntro"> 课程介绍 </MenuItem>
            <MenuItem key="StudentInterview"> 学生采访 </MenuItem>
            <MenuItem key="CampusesIntro"> 校区介绍 </MenuItem>
          </Menu>
        </template>

        <div class="p-6 flex items-center">
          菲律宾留学专区<DownOutlined class="text-xs ml-1" />
        </div>
      </Dropdown>
      <Dropdown>
        <template #overlay>
          <Menu @click="handleMenuClick">
            <MenuItem key="RelatedNews"> 相关新闻 </MenuItem>
          </Menu>
        </template>
        <div class="p-6 flex items-center">
          留学攻略<DownOutlined class="text-xs ml-1" />
        </div>
      </Dropdown>
      <Dropdown>
        <template #overlay>
          <Menu @click="handleMenuClick">
            <MenuItem key="CompanyInfo"> 公司信息 </MenuItem>
            <MenuItem key="ConnectUs"> 联系我们 </MenuItem>
          </Menu>
        </template>
        <div class="p-6 flex items-center">
          关于我们<DownOutlined class="text-xs ml-1" />
        </div>
      </Dropdown>
    </template>
    <Popover
      v-else
      arrow-point-at-center
      trigger="click"
      v-model:open="menuOpen"
      placement="bottomRight"
    >
      <template #content>
        <Menu
          :open-keys="openKeys"
          :selected-keys="selectedKeys"
          style="width: 100%"
          mode="inline"
          :items="items"
          @click="handleMenuClick"
        ></Menu>
      </template>
      <UnorderedListOutlined class="absolute top-3 right-6 text-2xl" />
    </Popover>
  </div>
  <div class="h-16 w-full bg-gray-100"></div>
  <div class="flex justify-center w-full">
    <div class="max-w-[1140px] w-[1140px] p-6">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import iyalalogo from '@/assets/iyalalogo.svg';
import { DownOutlined, UnorderedListOutlined } from '@ant-design/icons-vue';
import { Dropdown, MenuItem, Menu, Popover } from 'ant-design-vue';
import { useMediaQuery } from './hooks/useMediaQuery';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const colSize = useMediaQuery();
const router = useRouter();
const isMobile = computed(
  () => colSize.value === 'sm' || colSize.value === 'xs'
);
const selectedKeys = ref(['1']);
const openKeys = ref(['sub1']);
const menuOpen = ref(false);
const items = ref([
  {
    key: 'Home',
    title: 'Navigation One',
    label: '首页',
  },
  {
    key: 2,
    title: 'Navigation Two',
    label: '日本留学专区',
    children: [
      { key: 'RbCourseIntro', title: 'Navigation Two', label: '课程介绍' },
      { key: 'SuccessfulCase', title: 'Navigation Two', label: '成功案例' },
      {
        key: 'LanguageSchoolIntro',
        title: 'Navigation Two',
        label: '语言学校介绍',
      },
    ],
  },
  {
    key: 3,
    title: 'Navigation Two',
    label: '菲律宾留学专区',
    children: [
      { key: 'CourseIntro', title: 'Navigation Two', label: '课程介绍' },
      { key: 'StudentInterview', title: 'Navigation Two', label: '学生采访' },
      { key: 'CampusesIntro', title: 'Navigation Two', label: '校区介绍' },
    ],
  },
  {
    key: 4,
    title: 'Navigation Two',
    label: '留学攻略',
    children: [
      { key: 'RelatedNews', title: 'Navigation Two', label: '相关新闻' },
    ],
  },
  {
    key: 5,
    title: 'Navigation Two',
    label: '关于我们',
    children: [
      { key: 'CompanyInfo', title: 'Navigation Two', label: '公司信息' },
      { key: 'ConnectUs', title: 'Navigation Two', label: '联系我们' },
    ],
  },
]);
const handleMenuClick = ({ key }) => {
  if (typeof key === 'string') {
    router.push({ name: key });
    menuOpen.value = false;
  }
};
</script>
