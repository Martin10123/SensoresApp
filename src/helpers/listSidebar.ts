interface ListSidebar {
  name: string;
  elements: ElementsSidebar[];
}

interface ElementsSidebar {
  name: string;
  icon: string;
}

export const listSidebar: ListSidebar[] = [
  {
    name: "ANÁLISIS",
    elements: [
      {
        name: "Dashboard",
        icon: "/assets/homeIcon.svg",
      },
      {
        name: "Reportaje",
        icon: "/assets/reportIcon.svg",
      },
      {
        name: "Proyectos",
        icon: "/assets/projectsIcon.svg",
      },
    ],
  },
  {
    name: "CONTENIDO",
    elements: [
      {
        name: "Mejoras",
        icon: "/assets/improvementIcon.svg",
      },
      {
        name: "Proximos proyectos",
        icon: "/assets/nextProjects.svg",
      },
      {
        name: "Guias",
        icon: "/assets/guidesIcon.svg",
      },
    ],
  },
];

interface ListSidebarIcons {
  name: string;
}

export const listSidebarIcons: ListSidebarIcons[] = [
  {
    name: "/assets/homeIcon.svg",
  },
  {
    name: "/assets/usersIcon.svg",
  },
  {
    name: "/assets/graficIcon.svg",
  },
  {
    name: "/assets/notificationIcon.svg",
  },
  {
    name: "/assets/settingsIcon.svg",
  },
];
