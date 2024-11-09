import React from 'react';
import Image from 'next/image';

interface propsType {
    title: string;
    desc: string;
    img:string;
    tags:string[];
}

const Card:React.FC<propsType> = ({title, desc, img, tags}) => {
  return (
    <div className='border border-yellow-600 w-[300px] sm:w-[350px] gap-10' data-aos="zoom-in-up">
        <div>
           <Image className='w-[300px] sm:w-[350px] h-auto'
           src={img}
           width={350}
           height={350}
           alt={title}
           />
        </div>

        <div className='p-4 space-y-4'>
            <div className='text-4xl font-extralight'>{title}</div>
            <div>{desc}</div>
            <div>
                {tags.map((el) => (
                    <div className='tags' key={el}> 
                     {el}
                    </div> 
                ))}
            </div>
        </div>
        </div>
  )
}

export default Card