import { useState } from 'react';
import { useSelector, useDispatch, connect } from "react-redux";
import {
  buyItem,
  sellItem,
  clear
} from '../../redux/features/transactionsSlice';
import { Link } from 'react-router-dom';


const Transactions = () => {
  const transaction = useSelector((state => state.transaction));
  const dispatch = useDispatch();
const [buyItem, SetBuyItem] = useState(0);
const [sellItem, SetSellItem] = useState(0);
const clearBuy = () => {
SetBuyItem(0);
dispatch(clear());
}
const clearSell = () => {
SetSellItem(0);
dispatch(clear());
}

  return (
    <>
      <div className="content_flexbox">
        <div>Purchases</div>

<button onClick={() => dispatch(buyItem())}>BUY</button>
<button onClick={() => dispatch(sellItem())}>SELL</button>
<button onClick={() => dispatch(clearBuy())}>clear</button>
<button onClick={() => dispatch(clearSell())}>clear_sell</button>
        <Link to='myitems'>Inventory</Link>
        <Link to='mytrip'>Ticket</Link>
        <Link to=':tourId'>TOURS</Link>
      </div>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => ({
  loggedInUser: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);