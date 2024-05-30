import Link from "next/link";
import React from "react";

export default function page() {
  const allAss = `
  {
    "data": [
        {
            "id": "6658a5320d74a43f920905c0",
            "title": "Assignment 1",
            "slug": "assignment-1",
            "description": "This is the descripton for Assignment 1",
            "link_one": "https://desishub-docs.vercel.app/programming-tutorials/nextjs/next-auth",
            "link_two": "https://desishub-docs.vercel.app/programming-tutorials/nextjs/next-auth",
            "topic": "Dom Manipulation",
            "createdAt": "2024-05-30T16:11:27.984Z",
            "updatedAt": "2024-05-30T16:11:27.984Z"
        },
       ...
    ],
    "error": null,
    "success": true
}
  `;
  const body = `
  {
    "title": "Assignment 3",
    "description": "This is the descripton for Assignment 3",
    "link_one": "https://desishub-docs.vercel.app/programming-tutorials/nextjs/next-auth",
    "link_two": "https://desishub-docs.vercel.app/programming-tutorials/nextjs/next-auth",
    "topic": "Dom Manipulation"
}`;
  const single = `
{
  "title": "Assignment 3",
  "description": "This is the descripton for Assignment 3",
  "link_one": "https://desishub-docs.vercel.app/programming-tutorials/nextjs/next-auth",
  "link_two": "https://desishub-docs.vercel.app/programming-tutorials/nextjs/next-auth",
  "topic": "Dom Manipulation"
}`;
  return (
    <div className="max-w-3xl mx-auto p-16">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Assignment API Endpoints
      </h1>
      <div className="py-4">
        <h2 className=" py-4 text-blue-700 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Get all Assignments
        </h2>
        <Link
          href={"https://assignment-api-eta.vercel.app/api/assignments"}
          className="mt-4 block p-4 border border-gray-400"
        >
          [GET] https://assignment-api-eta.vercel.app/api/assignments
        </Link>
        <p className="leading-7 [&:not(:first-child)]:mt-6 py-2">Response</p>
        <div className="mt-4 p-4 border border-gray-400 overflow-hidden">
          <pre>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {allAss}
            </code>
          </pre>
        </div>
      </div>
      <div className="py-4">
        <h2 className=" py-4 text-blue-700 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Get a single Assignment
        </h2>
        <Link
          href={
            "https://assignment-api-eta.vercel.app/api/assignments/assignement-2"
          }
          className="mt-4 p-4 block border border-gray-400"
        >
          [GET] https://assignment-api-eta.vercel.app/api/assignments/[slug]
        </Link>
        <p className="leading-7 [&:not(:first-child)]:mt-6 py-2">Response</p>
        <div className="mt-4 p-4 border border-gray-400 overflow-hidden">
          <pre>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {single}
            </code>
          </pre>
        </div>
      </div>
      <div className="py-4">
        <h2 className=" py-4 text-blue-700 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Create an Assignment
        </h2>
        <Link
          href={"https://assignment-api-eta.vercel.app/api/assignments"}
          className="mt-4 block p-4 border border-gray-400"
        >
          [POST] https://assignment-api-eta.vercel.app/api/assignments
        </Link>
        <p className="leading-7 [&:not(:first-child)]:mt-6 py-2">Body</p>
        <div className="mt-4 p-4 border border-gray-400 overflow-hidden">
          <pre>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {body}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
