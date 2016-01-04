AdminConfig = {
  dashboard: {
    homeUrl: '/dashboard',
  }
}

AdminDashboard.addSidebarItem('Posts', AdminDashboard.path('/blogadmin'), { icon: 'plus' });
