'use client';

import { useContactForm } from '@/hook/useContactForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
    const { values, errors, submitted, handleChange, handleSubmit } =
        useContactForm();

    return (
        <>
            <section
                id='contact'
                className='section bg-white dark:bg-zinc-900 relative z-10'>
                <div className='container mx-auto px-4 max-w-2xl'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-zinc-900 dark:text-white text-center'>
                        Contact Us
                    </h2>

                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <div>
                            <label className='block font-medium mb-1'>
                                Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                value={values.name}
                                onChange={handleChange}
                                className='w-full p-3 border rounded-md bg-white dark:bg-zinc-800'
                            />
                            {errors.name && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className='block font-medium mb-1'>
                                Email
                            </label>
                            <input
                                type='email'
                                name='email'
                                value={values.email}
                                onChange={handleChange}
                                className='w-full p-3 border rounded-md bg-white dark:bg-zinc-800'
                            />
                            {errors.email && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {errors.email}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className='block font-medium mb-1'>
                                Company
                            </label>
                            <input
                                type='text'
                                name='company'
                                value={values.company}
                                onChange={handleChange}
                                className='w-full p-3 border rounded-md bg-white dark:bg-zinc-800'
                            />
                            {errors.company && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {errors.company}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className='block font-medium mb-1'>
                                License Type
                            </label>
                            <select
                                name='licenseType'
                                value={values.licenseType}
                                onChange={handleChange}
                                className='w-full p-3 border rounded-md bg-white dark:bg-zinc-800'>
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
                            <label className='block font-medium mb-1'>
                                Message
                            </label>
                            <textarea
                                name='message'
                                rows={4}
                                value={values.message}
                                onChange={handleChange}
                                className='w-full p-3 border rounded-md bg-white dark:bg-zinc-800'
                            />
                            {errors.message && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {errors.message}
                                </p>
                            )}
                        </div>
                        <button
                            type='submit'
                            className='btn btn-lg bg-black text-white hover:bg-zinc-800'>
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
