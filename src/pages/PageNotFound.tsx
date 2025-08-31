import React from 'react'

const PageNotFound = () => {
  return (
    <div className='flex flex-col gap-y-2 justify-center items-center text-3xl text-white bg-black min-h-screen'>
      <p>Error - 404</p>
      <p>Page Not Found</p>
      <p>or Page Loading </p>
      {/* <p>😲</p> */}
    </div>
  )
}

export default PageNotFound
