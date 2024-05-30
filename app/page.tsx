import React from 'react'

export default function page() {
  return (
    <div className='max-w-3xl mx-auto p-16'>
       <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Assignment API Endpoints
      </h1>
      <div className="py-4">
      <h2 className=" py-4 text-blue-700 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Get all Assignments
    </h2>
      <div className="mt-4 p-4 border border-gray-400">
      [GET] https://api.escuelajs.co/api/v1/products
      </div>
      </div>
      <div className="py-4">
      <h2 className=" py-4 text-blue-700 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Get a single Assignment
    </h2>
      <div className="mt-4 p-4 border border-gray-400">
      [GET] https://api.escuelajs.co/api/v1/products
      </div>
      </div>
      <div className="py-4">
      <h2 className=" py-4 text-blue-700 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Create an Assignment
    </h2>
      <div className="mt-4 p-4 border border-gray-400">
      [POST] https://api.escuelajs.co/api/v1/products
      </div>
      </div>
    </div>
  )
}
