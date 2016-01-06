AdminConfig = {
  name: "Theia's Tahini",
  collections: {
    Recipes: {},
    Products: {}
  }
}

AdminDashboard.addSidebarItem('Posts', AdminDashboard.path('/blogadmin'), { icon: 'plus' });
