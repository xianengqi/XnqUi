<template>
  <div class="wrap">
    <h1><img src="../assets/logo.png"/></h1>
    <h3>{{ msg }}</h3>

    <h2>基础组件</h2>
    <h4>按钮</h4>
    <xm-button>普通</xm-button>
    <xm-button type="primary" @click="btnClick" icon="xm__icon--checked" >主要</xm-button>
    <xm-button type="error" icon="xm__icon--checked" ></xm-button>
    <xm-button type="warning" disabled>禁止</xm-button>
    <xm-button plain>简约</xm-button>
    <xm-button type="text" icon="xm__icon--checked">文字</xm-button>
    <xm-button loading type="success">loading状态</xm-button>
    <xm-button bg-color="#fc0" color="#e0439a" border-color="#fc0">自定义颜色</xm-button>
    <br/><br/>
    <xm-button bg-color="#fcb" color="#e0439a" border-color="#fcb" block no-radius class="btn__block">无圆角块状</xm-button>
    <br/>
    <xm-button round long @click="btnClick">100%宽圆角</xm-button>
    <br/><br/>
    <xm-button-group class="btn__group">
      <xm-button type="warning">警告</xm-button>
      <xm-button type="primary" @click="btnClick" icon="xm__icon--checked" >主要</xm-button>
      <xm-button type="success" icon="xm__icon--loading">成功</xm-button>
    </xm-button-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: `xmui - 基于vue2.x，可复用UI组件`,
      value: '',
      value1: '',
      value2: '',
      value3: '',
      inputValue: '',
      modalVisible1: false,
      modalVisible2: false,
      modalVisible3: false,
      zIndex: 3000,
      stepList: ['发起工单', '主管审批', '经理审批', '总监核查', '结束'],
      step: 2,
      tag1: true,
      switch1: true,
      switch2: false,
      selectList: [
        { name: '请选择出行方式', value: 0 },
        { name: '巴士', value: 1 },
        { name: '快车', value: 2 },
        { name: '专车', value: 3 },
        { name: '顺风车', value: 4 },
        { name: '出租车', value: 5 },
        { name: '代驾', value: 6 }
      ],
      curSelected: '3',
      inputVal: '',
      textareaVal: '',
      selectVal: '',
      switchVal: true,
      gridRow: [
        { icon: '请选择出行方式', text: '巴士' },
        { name: '巴士', text: '巴士' },
        { name: '快车', text: '快车' },
        { name: '专车', text: '专车' },
        { name: '顺风车', text: '顺风车' },
        { name: '出租车', text: '出租车' },
        { name: '代驾', text: '代驾' }
      ],
      radio: '巴士',
      checkbox: ['1', '4'],
      hrefObj: { path: '/mall', params: { userId: 123 } },
      itemList: [
        { text: '顺风车',
          icon: '<span class="xm__icon--loading"></span>',
          callBack: () => {
            this.$modal.alert({
              title: '提示',
              content: '我是actionsheet弹出来的',
              color: '#19be6b'
            })
          }
        },
        { text: '巴士', icon: '<img src="https://github.com/monw3c/xmui/blob/master/static/logo.jpg?raw=true"/>', callBack: () => {} },
        { text: '快车',
          icon: '<p>“别打算XSS攻击”</p>',
          callBack: () => {
            this.$modal.alert({
              title: '提示',
              content: '想了解vue XSS攻击点确定',
              color: '#19be6b',
              callBack: () => {
                location.href = 'https://segmentfault.com/q/1010000009844447'
              }
            })
          }
        },
        { text: '专车', callBack: () => {} }
      ],
      actionSheetVisible1: false,
      actionSheetVisible2: false,
      popupVisible1: false,
      popupVisible2: false,
      active: '/mall',
      loadingStatus: true
    }
  },
  methods: {
    clickLeft () {
      alert('左边')
    },
    clickRight () {
      alert('右边')
    },
    routerAction () {

    },
    cellClick () {
      this.$toast.text({content: '您有8条消息，注意查收', direction: 'top'})
    },
    gridClick () {
      alert(1)
    },
    switchAction (val) {
      this.switchVal = val
    },
    inputAction2 () {

    },
    inputAction1 (val) {
      this.inputVal = val
    },
    selectAction (val) {
      this.selectVal = val
    },
    textareaAction (val) {
      this.textareaVal = val
    },
    textareaAction3 (val) {
      this.value3 = val
    },
    toastClick1 () {
      this.$toast.text({content: '太长会换行呢，15个字以内最好', direction: 'bottom'})
    },
    toastClick2 () {
      this.$toast.loading({
        // mask: false
      })
    },
    toastClick3 () {
      this.$toast.loading({
        mask: false
      })
    },
    modalClick4 () {
      this.$modal.alert({
        title: '这里可以自定义',
        content: '开启3秒关闭，取消背景层关闭',
        confirmText: '窝要关了',
        color: '#19be6b',
        autoClose: true,
        maskClosable: false
      })
    },
    modalClick5 () {
      this.$modal.confirm({
        title: '提示',
        content: '你想怎么样呢？',
        confirmText: 'ok啦',
        cancelText: '窝要关了',
        color: '#19be6b',
        callBack () {
          this.$modal.alert({
            title: '这里可以自定义',
            content: '开启3秒关闭，取消背景层关闭',
            confirmText: '知道了',
            color: '#19be6b',
            autoClose: true,
            maskClosable: false
          })
        }
      })
    },
    modalClick6 () {
      this.$modal.prompt({
        title: '你想怎么样呢？',
        placeholder: '填入您的支付宝密码',
        confirmText: 'ok啦',
        cancelText: '窝要关了',
        color: '#ed3f14',
        // readonly: true,
        callBack (val) {
          this.$modal.alert({
            title: '我爱你',
            content: `密码是${val}，我爱你真的，把帐号也发我一遍 `,
            confirmText: 'ok的啦',
            color: '#19be6b'
          })
        }
      })
    },
    btnClick () {
      alert('按钮点击')
    },
    closeTag () {
      this.tag1 = false
    },
    loadMore () {
      alert(`loadMore`)
    },
    searchAction (e) {
      this.value = e
      alert(this.value)
    },
    searchCancel (e) {
      this.value = ''
    },
    inputAction (e) {
      this.inputValue = e
    },
    modalClick1 (e) {
      this.modalVisible1 = true
      this.zIndex++
    },
    modalClick2 (e) {
      this.modalVisible2 = true
      this.zIndex++
    },
    modalClick3 (e) {
      this.modalVisible3 = true
      this.zIndex++
    },
    modalClose1 (e) {
      this.modalVisible1 = false
    },
    modalClose2 (e) {
      this.modalVisible2 = false
    },
    modalClose3 (e) {
      this.modalVisible3 = false
    },
    modalOk1 (e) {
      this.modalVisible1 = false
    },
    modalOk2 (e) {
      alert(`${this.value2} 和 ${this.value3}`)
      this.modalVisible2 = false
      this.value2 = ''
      this.value3 = ''
    },
    openModalBox (e) {
      this.popupVisible1 = false
      this.$modal.alert({
        title: '这里可以自定义',
        content: '开启3秒关闭，取消背景层关闭',
        color: '#19be6b',
        autoClose: true,
        maskClosable: false
      })
    },
    loadedAction () {
      this.$toast.text({content: '延迟加载完成！', direction: 'bottom'})
    }
  },
  mounted: () => {

  }
}
</script>

<style lang="scss">
#demo-wrap{
  margin: 10px auto;
}
.wrap{
  margin: 10px;
}
h1,h3{
  margin: 0;
}
h3{
  font-weight: normal;
  font-size: 16px;
}
h4{
  font-weight: normal;
  font-size: 14px;
  text-align: left;
  background-color: #e9e9e9;
  padding: 10px;
}
h2{
  text-align: left;
  width: 100%;
  border-bottom: 1px dashed #ededed;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  text-indent: 10px;
  margin-top: 30px;
  margin-bottom: 0;
}
.btn__group{
  border: 1px solid #eee;
  padding: 10px;
  position: relative;
  margin: 0 20px;
}
.btn__group::before{
  content: '按钮组';
  font-size:12px;
  position: absolute;
  top: -6px;
  right: -20px;
  background: #fff;
  color: #aaa;
}
.btn__block{
  margin: 0 auto!important;
}
.wrap > .xm__btn,.xm__tag{
  margin-bottom: 10px;
}
.xm__dialog--special .xm__dialog--bd img{
  width: 100%;
  border-radius: 4px;
}
.xm__loading--wrap{
  margin: 15px auto;
}
.right-top-loading{
  position: fixed;
  right: 5px;
  top: 5px;
  z-index: 9999;
}
.right-top-loading.xm__loading--wrap{
  margin: 0;
}
.form-demo{
  width: 98%;
  margin: 0 auto;
  background: #f5f5f5;
  padding: 1%;
}
// 骨架demo
.topic-loading-item{
  margin-top: 20px;
}
.topic-loading-item .loading-item-one{
  display: flex;
  align-items: center;
}
.topic-loading-item .loading-item-one .xm__skeleton--bar{
  margin-left: 10px;
}
.topic-loading-item .loading-item-two {
    margin-top: 10px;
}
.topic-loading-item .loading-item-three {
    margin-top: 10px;
}
.xm__tabbar{
  background: #fff;
}
.tabbar-wrap, .navbar-wrap{
  background: #f5f5f5;
  padding: 10px;
}

.xm__navbar--title img{
  height: 30px;
}

.flex.xm__flexbox{
  border:1px solid #eee;
  font-size: 16px;
}
.flex.xm__flexbox.xm__flex--vertical{
  border:none;
  height: 300px;
}
.flex.xm__flexbox div:nth-child(odd){
  background: #ededed;
  width: 100px;
  height: 50px;
  align-items: center;
  justify-content: center;
  display: flex;
}

.flex.xm__flexbox.xm__flex--vertical div{
  width: 100%;
}
.flex.xm__flexbox.xm__flex--vertical .xm__flex--item{
  background: #ddd;
  align-items: center;
  justify-content: center;
  display: flex;
}
.xm__seamlessscroll--item{
  font-size: 1.5rem;
}
.selectSign{
  margin-bottom: 0;
}
.selectSign .xm__cell--item{
  padding: 5px 0 5px 10px;
}
.selectSign .xm__cell--left{
    flex: 1!important;
    justify-content: center!important;
}
.selectSign .xm__cell--left .img{
    width: 50px;
}
.selectSign .xm__cell--right{
    flex: 4!important;
    justify-content: flex-start!important;
    text-align: left!important;
}
.selectSign .xm__cell--right p{
    display: flex;
    align-items: center;
    margin: 1rem 0;
}
.selectSign .xm__cell--right p:last-child{
    color: #999;
    font-size: 1.4rem;
}
.selectSign .xm__cell--right p .xm__tag{
    padding:3px 4px;
    font-size: 1.1rem!important;
    margin-left: .5rem;
}
</style>
