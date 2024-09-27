import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice.js';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartTotalPrice = useSelector(getTotalCartPrice);

  if(!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-around bg-stone-800 p-4 text-center uppercase text-stone-200">
      <p className="space-x-4 font-semibold text-stone-300">
        <span>{totalCartQuantity} pizzas</span>
        <span>${totalCartTotalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
