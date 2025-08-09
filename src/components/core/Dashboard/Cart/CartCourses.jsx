import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { removeFromCart } from '../../../../redux/slices/cartSlice';
import RatingStars from '../../../common/RatingStars';

const CartCourses = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex-1">
      {cartItems.map((course, ind) => (
        <div
          key={course._id}
          className={`flex flex-col md:flex-row items-start justify-between w-full gap-6 ${
            ind !== cartItems.length - 1 && 'border-b border-base-300 pb-6'
          } ${ind !== 0 && 'mt-6'}`}
        >
          <div
            className="flex flex-1 gap-4 cursor-pointer"
            onClick={() => navigate(`/course/${course._id}`)}
          >
            <img
              src={course?.thumbnail}
              alt={course?.title}
              className="h-24 w-36 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-lg font-medium text-white">{course?.title}</h2>
              <p className="text-sm text-base-content">{course?.category?.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-yellow-500">{course?.averageRating}</p>
                <RatingStars rating={course?.averageRating} starSize={20} />
                <p className="text-base-content">{course?.reviews?.length} Ratings</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-y-2">
            <button
              onClick={() => dispatch(removeFromCart(course._id))}
              className="flex items-center gap-x-1 rounded-md border border-base-300 bg-base-200 py-2 px-3 text-error transition-all duration-200 hover:bg-error hover:text-white"
            >
              <RiDeleteBin6Line />
              <span>Remove</span>
            </button>
            <p className="text-2xl font-medium text-primary">₹ {course?.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartCourses;
