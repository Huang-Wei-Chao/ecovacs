import state from "./state";

export default {

  /*计算已选商品总价*/
  totalPrice(state) {
    let list = state.product.filter(obj => obj.checked === true)
    let totalPrice = 0
    list.forEach(item => {
      totalPrice += item.price * item.count
    })
    return totalPrice
  }
}
