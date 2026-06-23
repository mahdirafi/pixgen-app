import { getPhotoById } from '@/lib/getPhotos';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import { BiDownload } from 'react-icons/bi';
import { MdCategory } from 'react-icons/md';
import { BsCpu } from 'react-icons/bs';
import { TbRuler } from 'react-icons/tb';
import Link from 'next/link';

const AllPhotosDetails = async ({ params }) => {
    const { id } = await params;
    const photo = await getPhotoById(id);

    if (!photo) {
        return (
            <div className='text-center my-20 text-2xl text-gray-400'>
                Photo not found!
            </div>
        );
    };

    return (
        <div className='min-h-screen bg-gray-950 text-white'>
            
            {/* Hero Image */}
            <div className='relative w-full h-[60vh]'>
                <Image
                    src={photo.imageUrl}
                    alt={photo.title}
                    fill
                    className='object-cover rounded'
                    priority
                />
                {/* Dark overlay */}
                <div className='absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/40 to-transparent' />

                {/* Category badge on image */}
                <div className='absolute top-4 left-4'>
                    <span className='bg-pink-600/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full'>
                        {photo.category}
                    </span>
                </div>

                {/* Back button */}
                <div className='absolute top-4 right-4'>
                    <Link href='/all-photos'>
                        <button className='bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-sm px-4 py-2 rounded-full border border-white/20 transition cursor-pointer'>
                            ← Back
                        </button>
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className='max-w-4xl mx-auto px-6 -mt-16 relative z-10 pb-20'>

                {/* Title & Prompt */}
                <div className='mb-8'>
                    <h1 className='text-4xl font-bold mb-3 text-white'>
                        {photo.title}
                    </h1>
                    <p className='text-gray-400 text-lg leading-relaxed'>
                        {photo.prompt}
                    </p>
                </div>

                {/* Stats Row */}
                <div className='flex gap-6 mb-8 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl'>
                    <div className='flex items-center gap-2 text-pink-400'>
                        <FaHeart className='text-xl' />
                        <span className='text-white font-semibold text-lg'>{photo.likes}</span>
                        <span className='text-gray-500 text-sm'>likes</span>
                    </div>
                    <div className='w-px bg-white/10' />
                    <div className='flex items-center gap-2 text-blue-400'>
                        <BiDownload className='text-xl' />
                        <span className='text-white font-semibold text-lg'>{photo.downloads}</span>
                        <span className='text-gray-500 text-sm'>downloads</span>
                    </div>
                    <div className='w-px bg-white/10' />
                    <div className='flex items-center gap-2 text-purple-400'>
                        <MdCategory className='text-xl' />
                        <span className='text-white font-semibold text-lg'>{photo.category}</span>
                    </div>
                </div>

                {/* Info Cards */}
                <div className='grid grid-cols-2 gap-4 mb-8'>
                    <div className='p-5 bg-white/5 border border-white/10 rounded-2xl'>
                        <div className='flex items-center gap-2 mb-1'>
                            <BsCpu className='text-purple-400' />
                            <p className='text-gray-500 text-sm'>AI Model</p>
                        </div>
                        <p className='text-white font-semibold text-lg'>{photo.model}</p>
                    </div>
                    <div className='p-5 bg-white/5 border border-white/10 rounded-2xl'>
                        <div className='flex items-center gap-2 mb-1'>
                            <TbRuler className='text-blue-400' />
                            <p className='text-gray-500 text-sm'>Resolution</p>
                        </div>
                        <p className='text-white font-semibold text-lg'>{photo.resolution}</p>
                    </div>
                </div>

                {/* Tags */}

                <div className='flex flex-wrap gap-2 mb-8'>
                    {photo.tags.map((tag) => (
                        <span
                            key={tag}
                            className='bg-white/5 hover:bg-pink-600/20 border border-white/10 hover:border-pink-500/40 text-gray-300 hover:text-pink-300 px-4 py-1.5 rounded-full text-sm transition cursor-pointer'
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Download Button */}
                <a
                    href={photo.imageUrl}
                    download
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <button className='w-full py-4 bg-pink-600 hover:bg-pink-500 text-white font-semibold text-lg rounded-2xl flex items-center justify-center gap-2 transition'>
                        <BiDownload className='text-2xl' />
                        Download Image
                    </button>
                </a>
            </div>
        </div>
    );
};

export default AllPhotosDetails;