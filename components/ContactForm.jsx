'use client';

import { useContactForm } from '@/hook/useContactForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
    const { values, errors, handleChange, handleSubmit } =
        useContactForm();

    return (
        <>
            <section
                id='contact'
                className='section bg-white dark:bg-zinc-900 relative z-10 story'>
                <div className='container mx-auto px-4 max-w-2xl'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-zinc-900 dark:text-white text-center'>
                        Contact Us
                    </h2>

                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <div>
                            <label
                                htmlFor='name'
                                className='block mb-1 dark:text-white'>
                                Name
                            </label>
                            <input
                                id='name'
                                type='text'
                                name='name'
                                value={values.name}
                                onChange={handleChange}
                                className='w-full p-3 border rounded-md bg-white dark:text-white dark:bg-zinc-900'
                            />
                            {errors.name && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor='email'
                                className='block mb-1 dark:text-white'>
                                Email
                            </label>
                            <input
                                id='email'
                                type='email'
                                name='email'
                                value={values.email}
                                onChange={handleChange}
                                className='w-full p-3 border rounded-md bg-white dark:text-white dark:bg-zinc-900'
                            />
                            {errors.email && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {errors.email}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor='company'
                                className='block mb-1 dark:text-white'>
                                Company
                            </label>
                            <input
                                id='company'
                                type='text'
                                name='company'
                                value={values.company}
                                onChange={handleChange}
                                className='w-full p-3 border rounded-md bg-white dark:text-white dark:bg-zinc-900'
                            />
                            {errors.company && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {errors.company}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor='licenseType'
                                className='block mb-1 dark:text-white'>
                                License Type
                            </label>
                            <select
                                id='licenseType'
                                name='licenseType'
                                value={values.licenseType}
                                onChange={handleChange}
                                className='w-full p-3 border rounded-md bg-white dark:bg-zinc-900 dark:text-white'>
                                <option value=''>Select an option</option>
                                <option value='SaaS'>SaaS</option>
                                <option value='Desktop'>Desktop</option>
                                <option value='Enterprise'>Enterprise</option>
                            </select>
                            {errors.licenseType && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {errors.licenseType}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor='message'
                                className='block mb-1 dark:text-white'>
                                Message
                            </label>
                            <textarea
                                id='message'
                                name='message'
                                rows={4}
                                value={values.message}
                                onChange={handleChange}
                                className='w-full p-3 border rounded-md bg-white dark:text-white dark:bg-zinc-900'
                            />
                            {errors.message && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {errors.message}
                                </p>
                            )}
                        </div>
                        <button
                            type='submit'
                            className='btn btn-lg bg-black text-white dark:hover:opacity-80 dark:text-white dark:border-2 font-bold dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]'>
                            Submit
                        </button>
                    </form>
                </div>
            </section>
            <div className='!absolute !top-1/2 !right-2 !z-[2000]'>
                <ToastContainer />
            </div>
        </>
    );
}
