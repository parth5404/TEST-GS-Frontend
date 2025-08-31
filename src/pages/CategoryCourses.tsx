import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { fetchCourseCategories, getCategoryCourses } from '../services/operations/courseServices';
import Spinner from '../components/common/Spinner';
import Footer from '../components/common/Footer';
import CourseSlider from '../components/core/Category/CourseSlider';
import CourseCard from '../components/core/Category/CourseCard';

const CategoryCourses = () => {
  const { categoryName } = useParams();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [categoryId, setCategoryId] = useState(null);
  const [categoryPageData, setCategoryPageData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Find category id of categoryName
  useEffect(() => {
    const findAndSetCategoryId = async () => {
      setLoading(true);
      const categories = await fetchCourseCategories(dispatch, navigate);
      const reqCat = categories.filter(
        (cat) => cat.name.split(" ").join("-").toLowerCase() === categoryName?.toLowerCase()
      );

      if (reqCat.length) {
        setCategoryId(reqCat[0]._id)
      } else {
        setCategoryId("NOT_FOUND")
      }
      setLoading(false);
    }

    findAndSetCategoryId();
  }, [categoryName, dispatch, navigate]);


  // Fetch category courses data
  useEffect(() => {
    const fetchCategoryPageData = async () => {
      setLoading(true);
      const result = await getCategoryCourses(categoryId === "NOT_FOUND" ? null : categoryId);
      setCategoryPageData(result);
      setLoading(false);
    }

    if (categoryId) {
      fetchCategoryPageData();
    }
  }, [categoryId])

  return (
    <div>
      {
        (loading || (!loading && !categoryPageData)) && (
          <div className='grid place-items-center min-h-[calc(100vh-3.5rem)] bg-black' >
            <Spinner />
          </div>
        )
      }

      {
        !loading && categoryPageData &&
        (
          <div className='bg-black text-white min-h-screen' >
            {/* Header */}
            <div className='bg-gray-900 pt-20' >
              <div className='mx-auto box-content px-4 lg:px-10 flex flex-col gap-4 justify-center min-h-[200px] max-w-4xl lg:max-w-6xl ' >
                <p className='text-sm text-richblack-300' >Home / Category /
                  {" "}
                  <span className='text-yellow-400' >
                    {categoryPageData.requestedCategory?.name || categoryName}</span>
                </p>

                <p className='text-3xl text-white font-bold' >
                  {categoryPageData.requestedCategory?.name || categoryName}
                </p>

                <p className='max-w-[870px] text-gray-300' >
                  {categoryPageData.requestedCategory?.description}
                </p>
              </div>
            </div>


            {/* Section 1 */}
            <div className='box-content mx-auto px-4 lg:px-10 py-12 max-w-4xl lg:max-w-6xl' >
              <h2 className='text-2xl text-white font-bold lg:text-4xl' >Courses to get you started</h2>
              <div className='flex my-4 border-b border-b-gray-600 text-sm' >
                <p
                  className={`cursor-pointer px-4 py-2
                  ${activeTab === 1 ? " text-yellow-400 border-b border-b-yellow-400" : "text-gray-300"}`}
                  onClick={() => setActiveTab(1)}
                >
                  Most Popular
                </p>

                <p
                  className={`cursor-pointer px-4 py-2
                  ${activeTab === 2 ? " text-yellow-400 border-b border-b-yellow-400" : "text-gray-300"}`}
                  onClick={() => setActiveTab(2)}
                >
                  New
                </p>
              </div>

              <div>
                {
                  activeTab === 1 &&
                  <CourseSlider
                    courses={categoryPageData.requestedCategoryCoursesMost}
                  />
                }

                {
                  activeTab === 2 &&
                  <CourseSlider
                    courses={categoryPageData.requestedCategoryCoursesNew}
                  />
                }
              </div>
            </div>


            {/* Section 2 */}
            <div className='box-content mx-auto px-4 lg:px-10 py-12 max-w-4xl lg:max-w-6xl'>
              <h2 className='text-2xl text-white font-bold lg:text-4xl' >
                Top courses in {categoryPageData.otherCategoryCourses.name}
              </h2>

              <div className='py-8' >
                <CourseSlider
                  courses={categoryPageData.otherCategoryCourses.courses}
                />
              </div>

            </div>




            {/* Section 3 */}
            <div className='box-content mx-auto px-4 lg:px-10 py-12 max-w-4xl lg:max-w-6xl'>
              <h2 className='text-2xl text-white font-bold lg:text-4xl' >
                Frequently Bought
              </h2>

              <div className='py-8' >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6' >
                  {
                    categoryPageData.topSellingCourses.slice(0, 4).map((course, ind) => (
                      <CourseCard course={course} key={ind} imgHeight={"h-[350px]"} />
                    ))
                  }
                </div>
              </div>
            </div>


            {/* Footer */}
            <Footer />

          </div>
        )
      }
    </div>
  )
}

export default CategoryCourses
