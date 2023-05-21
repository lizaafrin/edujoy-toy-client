import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

const Testimonial = () => {
    return (
        <div className='mx-2 lg:mx-10'>
            <div className='text-center'>
                <div className='w-fit mx-auto  bg-slate-800 rounded-lg mb-5 md:mb-14'>
                    <h2 className='text-xl text-white px-10 py-3'>What Our Clients Say!</h2>
                </div>
                <p className='text-xl font-semibold mt-0 md:mt-5'>See what our customers say about us. It’s really matter for us, how good or bad we will make it for evaluation to make Ella better.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-8'>
                <div className='card bg-slate-300 p-4'>
                    <div className="flex items-center mb-4 text-yellow-300">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStarHalf></FaStarHalf>
                    </div>
                    <blockquote>
                        <p className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-white">"The customer service at this toy shop is exceptional. They went above and beyond to help me find the perfect toy. I appreciate the focus on sustainable and eco-friendly toys at this shop. It's so important for our kids' future."</p>
                    </blockquote>
                    <figcaption className="flex items-center mt-6 space-x-3">
                        <img className="w-14 h-14 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" />
                        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                            <cite className="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
                            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Gobindo Designer at BananaTower</cite>
                        </div>
                    </figcaption>
                </div>
                <div className='card bg-slate-300 p-4'>
                    <div className="flex items-center mb-4 text-yellow-300">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStarHalf></FaStarHalf>
                    </div>
                    <blockquote>
                        <p className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-white">"The customer service at this toy shop is exceptional. They went above and beyond to help me find the perfect toy. I appreciate the focus on sustainable and eco-friendly toys at this shop. It's so important for our kids' future."</p>
                    </blockquote>
                    <figcaption className="flex items-center mt-6 space-x-3">
                        <img className="w-14 h-14 rounded-full" src="https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?w=1380&t=st=1684682532~exp=1684683132~hmac=6164ac75b4b27faaf722886b49dd6eab00f727eebda55a7b1f13560c5ed8d8f4" alt="profile picture" />
                        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                            <cite className="pr-3 font-medium text-gray-900 dark:text-white">Amy Martin</cite>
                            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at MangoTower</cite>
                        </div>
                    </figcaption>
                </div><div className='card bg-slate-300 p-4'>
                    <div className="flex items-center mb-4 text-yellow-300">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStarHalf></FaStarHalf>
                    </div>
                    <blockquote>
                        <p className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-white">"The customer service at this toy shop is exceptional. They went above and beyond to help me find the perfect toy. I appreciate the focus on sustainable and eco-friendly toys at this shop. It's so important for our kids' future."</p>
                    </blockquote>
                    <figcaption className="flex items-center mt-6 space-x-3">
                        <img className="w-14 h-14 rounded-full" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1684682385~exp=1684682985~hmac=f37e94ca42b95b1e35d92266480aaf68f39e43daa15dddd753979a62a7c44578" alt="profile picture" />
                        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                            <cite className="pr-3 font-medium text-gray-900 dark:text-white">Mathew Hayden</cite>
                            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Manager at OrangeTower</cite>
                        </div>
                    </figcaption>
                </div>
            </div>

        </div>
    );
};

export default Testimonial;