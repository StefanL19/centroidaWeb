AdminConfig = {
  name: "Theia's Tahini",
  dashboard: {
    homeUrl: '/dashboard',
  },
  collections: {
    Testimonials: {},
    Photos: {},
    Products: {}
  }
}

AdminDashboard.addSidebarItem('Posts', AdminDashboard.path('/blogadmin'), { icon: 'plus' });
