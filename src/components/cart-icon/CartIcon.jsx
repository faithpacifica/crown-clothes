import './CartIcon.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

const CartIcon = () => {
  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className='shoppong-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon