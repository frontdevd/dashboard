export default {
  items: [
    {
      id: 'navigation',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          url: '/dashboard',
          icon: 'feather icon-home',
        },
        {
          id: 'form-basic',
          title: 'Form Elements',
          type: 'item',
          url: '/forms',
          icon: 'feather icon-file-text'
        },
        {
          id: 'table',
          title: 'Table',
          type: 'item',
          icon: 'feather icon-server',
          url: '/tables'
        },
        {
          id: 'registration',
          title: 'Registration',
          type: 'item',
          icon: 'feather icon-box',
          url: '/auth/registration'
        },
        {
          id: 'login',
          title: 'Login',
          type: 'item',
          icon: 'feather icon-box',
          url: '/auth/login',
        },
        {
          id: 'chart',
          title: 'Charts',
          type: 'item',
          icon: 'feather icon-box',
          url: '/charts',
        },
        {
          id: 'tabs',
          title: 'Tabs',
          type: 'item',
          icon: 'feather icon-box',
          url: '/tabs'
        },
      ]
    },
  ]
}
