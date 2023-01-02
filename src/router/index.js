import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ToolsView from "../views/ToolsView.vue";
import UpdateToolView from "../views/UpdateToolView.vue";
import YarnsView from "../views/YarnsView.vue";
import UpdateYarnView from "../views/UpdateYarnView.vue";
import AddProjectView from "../views/AddProjectView.vue";
import UpdateProjectView from "../views/UpdateProjectView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "start",
      component: HomeView,
    },
    {
      path: "/projekt",
      name: "projekt",
      component: ProjectsView,
    },
    {
      path: "/lagg-till-projekt",
      name: "lägg till projekt",
      component: AddProjectView,
    },
    {
      path: "/uppdatera-projekt/:id",
      name: "uppdatera projekt",
      component: UpdateProjectView,
    },
    {
      path: "/verktyg",
      name: "verktyg",
      component: ToolsView,
    },
    {
      path: "/uppdatera-verktyg/:id",
      name: "uppdatera verktyg",
      component: UpdateToolView,
    },
    {
      path: "/garn",
      name: "garn",
      component: YarnsView,
    },
    {
      path: "/uppdatera-garn/:id",
      name: "uppdatera garn",
      component: UpdateYarnView,
    }
  ]
});

export default router;
