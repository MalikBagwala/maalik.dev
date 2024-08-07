import Avatar from '@/images/avatar.png';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { MdVerified as VerifiedIcon } from 'react-icons/md';
import Tooltip from '../atoms/Tooltip';
interface ProfileHeaderProps {
  expandMenu: boolean;
  imageSize: number;
}

const ProfileHeader = ({ expandMenu, imageSize }: ProfileHeaderProps) => {
  return (
    <div
      className={clsx(
        'flex items-center lg:items-start gap-4 lg:gap-0.5 flex-grow lg:flex-col w-full',
        expandMenu && 'flex-col !items-start',
      )}
    >
      <Image
        src={Avatar}
        alt='Profile Picture'
        width={expandMenu ? 80 : imageSize}
        height={expandMenu ? 80 : imageSize}
        placeholder='blur'
        className='rounded-full'
      />
      <div className='flex gap-2 items-center mt-1 lg:mt-4'>
        <Link href='/' passHref>
          <h2 className='flex-grow text-lg lg:text-xl font-sora font-medium'>
            Malik Bagwala
          </h2>
        </Link>
        <Tooltip title='Verified'>
          <VerifiedIcon size={18} className='text-blue-400' />
        </Tooltip>
      </div>
      <div className='hidden lg:flex text-sm font-sora text-neutral-600 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 transition-all duration-300'>
        @MalikBagwala
      </div>
    </div>
  );
};

export default ProfileHeader;
