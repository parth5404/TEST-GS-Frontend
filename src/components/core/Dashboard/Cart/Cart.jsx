import React from 'react';
import { useSelector } from 'react-redux';
import CartCourses from './CartCourses';
import CartAmount from './CartAmount';
import Spinner from '../../../common/Spinner';

const Cart = () => {
  const { cartItemsCount } = useSelector((state) => state.cart);
  const { paymentLoading } = useSelector((state) => state.profile);

  return (
    <div className="p-4 md:p-8 text-white">
      {paymentLoading ? (
        <div className="flex min-h-[calc(100vh-10rem)] justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div>
          <h1 className="text-4xl font-medium mb-8">My Cart</h1>
          <p className="font-semibold text-base-content border-b border-base-300 pb-2 mb-8">
            {cartItemsCount} Courses in Cart
          </p>
          {cartItemsCount === 0 ? (
            <p className="text-3xl text-center text-base-content mt-14">Your cart is empty</p>
          ) : (
            <div className="flex flex-col-reverse lg:flex-row items-start gap-12">
              <CartCourses />
              <CartAmount />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
