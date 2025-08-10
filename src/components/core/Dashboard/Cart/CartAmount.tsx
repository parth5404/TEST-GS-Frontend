import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IconBtn from '../../../common/IconBtn';
import { buyCourses } from '../../../../services/operations/paymentServices';

const CartAmount = () => {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleBuyCourse = async () => {
    const courses = cartItems.map((course) => course._id);
    await buyCourses(courses, user, token, true, dispatch, navigate);
  };

  return (
    <div className="min-w-[280px] mx-auto md:mx-0 rounded-lg bg-base-300 bg-opacity-30 backdrop-blur-md p-6 shadow-lg">
      <p className="text-lg font-medium text-base-content mb-2">Total:</p>
      <p className="text-4xl font-bold text-primary mb-6">₹ {cartTotalAmount}</p>
      <IconBtn
        text="Buy Now"
        onClickHandler={handleBuyCourse}
        disabled={loading}
        customClasses="w-full justify-center"
      />
    </div>
  );
};

export default CartAmount;
