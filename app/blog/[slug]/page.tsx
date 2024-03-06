import { fullBlog } from '@/app/lib/interface';
import { client } from '@/app/lib/sanity';
import React from 'react'
async function getData(slug: string) {
    const query = `
      *[_type == "blog" && slug.current == '${slug}'] {
          "currentSlug": slug.current,
            title,
            content,
            titleImage
        }[0]`;
  
    const data = await client.fetch(query);
    return data;
  }
  

export default async function page ({params}:{params:{slug:string}})  {
    console.log(params.slug)
    const data:fullBlog = await getData(params.slug)
    console.log(data);
  return (
    <div>
        <h1>{data.title}</h1>
    </div>
  )
}

