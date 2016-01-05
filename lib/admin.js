AdminConfig = {
  name: "Theia's Tahini",
  collections: {
    Testimonials: {},
    Photos:{
      templates: {
          new: {
            name: 'insertPhotoForm'
          },
        }
      },
    Products: {}
  }
}

AdminDashboard.addSidebarItem('Posts', AdminDashboard.path('/blogadmin'), { icon: 'plus' });
