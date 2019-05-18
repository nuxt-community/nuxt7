<template>
  <f7-page>
    <f7-navbar title="Routable Tabs"/>

    <!-- Toolbar -->
    <f7-toolbar tabbar labels bottom>
      <f7-link tab-link :href="tab.href" :route-tab-id="tab.id" v-for="tab in tabs" :key="tab.id">
        <f7-icon :ios="tab.icon" :md="tab.icon" :aurora="tab.icon"/>
        <span class="tabbar-label">{{ tab.label }}</span>
      </f7-link>
    </f7-toolbar>

    <!-- Tabs -->
    <f7-tabs routable swipeable>
      <Tab1 id="tab1"/>
      <Tab2 id="tab2"/>
      <Tab3 id="tab3"/>
    </f7-tabs>
  </f7-page>
</template>

<script>
import Tab1 from "~/components/tab1";
import Tab2 from "~/components/tab2";
import Tab3 from "~/components/tab3";

export default {
  components: { Tab1, Tab2, Tab3 },
  computed: {
    tabs: () => [
      {
        id: "tab1",
        href: "/",
        icon: "material:home",
        label: "Home"
      },
      {
        id: "tab2",
        href: "/tab2",
        icon: "f7:heart_fill",
        label: "Heart"
      },
      {
        id: "tab3",
        href: "/tab3",
        icon: "f7:logo_instagram",
        label: "Camera"
      }
    ]
  }
};
</script>
