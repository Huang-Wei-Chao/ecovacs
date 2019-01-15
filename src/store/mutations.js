export default {

  /*详情页添加至购物车事件*/
  addCart(state, detail) {
    let obj = {
      id: detail.id,
      name: detail.name,
      price: detail.price,
      icon: detail.cartIcon,
      count: detail.count,
      checked: true,
      gift: '',
      giftNum: ''
    }
    let cartArray = state.product
    let selectedItem = cartArray.filter(item => item.id === detail.id)[0]
    if (selectedItem) {
      selectedItem.count += detail.count
    } else {
      cartArray.push(obj)
    }
  },

  /*购物车点击减少商品数量事件*/
  decreaseCount(state, id) {
    state.product.forEach(item => {
      if (item.id === id) {
        if (item.count > 1) {
          item.count--
        }
      }
    })
  },

  /*购物车点击增加商品数量事件*/
  addCount(state, id) {
    state.product.forEach(item => {
      if (item.id === id) {
        item.count++
      }
    })
  },

  /*购物车点击删除商品事件*/
  deleteProduct(state, id) {
    state.product.forEach((item, index) => {
      if (item.id === id) {
        state.product.splice(index, 1)
      }
    })
  },


  /*购物车点击选择（取消）商品事件*/
  selectChecked(state, id) {
    state.product.forEach(item => {
      if (item.id === id) {
        item.checked = !item.checked
      }
    })
  },

  /*购物车点击全选（反选）商品事件*/
  selectAllChecked(state, totalChecked) {
    totalChecked = !totalChecked
    if (totalChecked) {
      state.product.forEach(item => {
        item.checked = true
      })
    } else {
      state.product.forEach(item => {
        item.checked = false
      })
    }
  },

  /*购物车点击结算商品事件*/
  pay(state, totalPrice) {
    window.alert(`支付${totalPrice}元`)
  }
}
