Component({
  mixins: [],
  properties: {
  },
  data: {
    tabList: [
      {
        id: 0,
        title: '周一'
      },
      {
        id: 1,
        title: '周二'
      },
      {
        id: 2,
        title: '周三'
      },
      {
        id: 3,
        title: '周四'
      },
      {
        id: 4,
        title: '周五'
      },
      {
        id: 5,
        title: '周六'
      },
      {
        id: 6,
        title: '周日'
      }
    ],
    currentTab: 0,
    contentList: [
      {
        id: 0,
        name: '鬼灭之刃',
        src: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
      },
      {
        id: 1,
        name: '鬼灭之刃',
        src: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
      },
      {
        id: 2,
        name: '鬼灭之刃',
        src: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
      },
      {
        id: 3,
        name: '鬼灭之刃',
        src: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
      },
      {
        id: 4,
        name: '鬼灭之刃',
        src: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
      },
      {
        id: 5,
        name: '鬼灭之刃',
        src: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
      },
      {
        id: 6,
        name: '鬼灭之刃',
        src: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
      },
      {
        id: 7,
        name: '鬼灭之刃',
        src: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
      },
      {
        id: 8,
        name: '鬼灭之刃',
        src: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
      },
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000    
  },
  methods: {
    handleSelectTab (e) {
      this.setData({
        currentTab : e.currentTarget.dataset.current
      })
    },
    handleSelectContent (e) {
      this.setData({
        currentTab : e.detail.current
      })
    }
  },
});
