/**
 * 示例组件描述，描述会显示在 axml 的提示中
 */
Component({
  partialUpdate: true,
  mixins: [],
  props: {
    /**
     * 示例属性描述，描述会显示在 axml 的提示中
     */
    text: 'New Component',
    /**
     * 哪怕没有初始值，也需要把属性定义一下，否则在 axml 中使用时 vscode 插件会报错。此时可以通过 JSDoc 声明该属性类型，如下
     * @type {number}
     */
    count: undefined,
  },
  data: {},
  didMount() { },
  didUpdate(prevProps, prevData) { },
  didUnmount() { },
  methods: {
    /* 
      除上述属性、方法以外的所有成员都需要写在 methods 里
      注意淘宝端不支持 methods 中定义非 function 成员，详见 https://yuque.antfin-inc.com/kbtiny/mini-solution/wix0og#e83d0c9b
     */
  },
});
