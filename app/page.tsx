import React from 'react'
import Navbar from './Components/Navbar'
import { client, urlFor } from './lib/sanity';
import { simpleBlogCard } from './lib/interface';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export const revalidate = 0;
async function getData(){
  const query = `*[_type=='blog']|order(_createdAt desc) {
  
    title,
    smallDescription,
      "currentSlug":slug.current,
      titleImage
  
  }`;
    const data = await client.fetch(query);
    return data;
}

export default async function  Home ()  {
  const data:simpleBlogCard []= await getData();
  console.log(data);
  return (
    <div>

      <div className="grid grid-cols-1 lg:grid-cols-4 mt-5">
        {
          data.map((blog,index)=>{
            return (
              <div key={index} className="lg:col-span-1">
                <Image priority src={urlFor(blog.titleImage).url()} alt="titleImage" width={500} height={500} className="w-full h-60 object-cover" />
                <h1 className="text-xl font-bold mt-2">{blog.title}</h1>
                <p className="text-sm mt-2">{blog.smallDescription}</p>
                <Button asChild className="mt-2" >
                  <Link href={`/blog/${blog.currentSlug}`}>  
                  Read more
                  </Link>
                  </Button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

