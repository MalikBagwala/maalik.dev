import Link from 'next/link';
import { AiFillPushpin as PinIcon } from 'react-icons/ai';
import { HiOutlineArrowSmRight as ViewIcon } from 'react-icons/hi';

import Card from '@/components/atoms/Card';
import CustomImage from '@/components/atoms/CustomImage';
import Tooltip from '@/components/atoms/Tooltip';
import { STACKS } from '@/constant/stacks';

const ProjectCard = ({ fields }: any) => {
  const { slug, title, description, thumbnail, stack, isFeatured } = fields;
  const thumbSrc = thumbnail?.fields?.file?.url;
  return (
    <Link href={`/projects/${slug}`}>
      <Card className='group relative border border-neutral-200 dark:border-neutral-900 lg:hover:scale-[102%] cursor-pointer'>
        {isFeatured && (
          <div className='flex items-center gap-1 absolute top-0 right-0 bg-lime-300 text-emerald-950 text-[13px] font-medium py-1 px-2 rounded-bl-xl rounded-tr-xl z-[2]'>
            <PinIcon size={15} />
            <span>Featured</span>
          </div>
        )}
        <div className='relative'>
          {thumbSrc && (
            <CustomImage
              src={`https:${thumbSrc}`}
              width={400}
              height={200}
              alt={title}
              className='rounded-t-xl h-48 object-cover object-left'
            />
          )}
          <div className='flex gap-1 absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 justify-center items-center text-white group-hover:opacity-80 rounded-t-xl text-sm font-medium'>
            <span>View Project</span>
            <ViewIcon size={20} />
          </div>
        </div>
        <div className='p-5 space-y-2'>
          <div className='flex justify-between'>
            <div className='text-lg font-sora cursor-pointer text-neutral-700 dark:text-neutral-300 lg:group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-all duration-300'>
              {title}
            </div>
          </div>
          <p className='text-neutral-700 dark:text-neutral-400 text-[15px] leading-relaxed'>
            {description}
          </p>
          <div className='flex flex-wrap items-center gap-3 pt-2'>
            {stack?.map((stack: any) => {
              const stackName = stack.fields?.name;
              return (
                <div key={stackName}>
                  <Tooltip title={stackName}>
                    {STACKS[stackName.toLowerCase()]}
                  </Tooltip>
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;
