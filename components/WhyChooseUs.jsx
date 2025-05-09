import { Timeline } from "./ui/timeline";
import {
    CheckCircle,
    Rocket,
    TrendingUp,
    ShieldCheck,
    Users
} from '@/utils/LucidIcons';

const WhyChooseUs = () => {
    const data = [
        {
            title: '2024',
            content: (
                <div className='space-y-4'>
                    <div className='flex items-start gap-3'>
                        <Rocket className='h-7 md:h-5 w-7 md:w-5 text-blue-600 dark:text-blue-400 mt-1' />
                        <p className='text-sm text-neutral-800 dark:text-neutral-200'>
                            Launched SoftSell with a mission to simplify
                            enterprise software resale and boost ROI for
                            businesses.
                        </p>
                    </div>
                    <div className='flex items-start gap-3'>
                        <TrendingUp className='h-7 md:h-5 w-7 md:w-5 text-green-600 dark:text-green-400 mt-1' />
                        <p className='text-sm text-neutral-800 dark:text-neutral-200'>
                            Onboarded 100+ verified sellers and reached ₹1
                            crore+ in software transactions.
                        </p>
                    </div>
                    <div className='flex items-start gap-3'>
                        <CheckCircle className='h-7 md:h-5 w-7 md:w-5 text-emerald-600 dark:text-emerald-400 mt-1' />
                        <p className='text-sm text-neutral-800 dark:text-neutral-200'>
                            Introduced instant license verification and
                            auto-transfer protocol for safer deals.
                        </p>
                    </div>
                </div>
            )
        },
        {
            title: 'Early 2023',
            content: (
                <div className='space-y-4'>
                    <div className='flex items-start gap-3'>
                        <ShieldCheck className='h-7 md:h-5 w-7 md:w-5 text-purple-600 dark:text-purple-400 mt-1' />
                        <p className='text-sm text-neutral-800 dark:text-neutral-200'>
                            Developed a proprietary escrow system to protect
                            both buyers and sellers.
                        </p>
                    </div>
                    <div className='flex items-start gap-3'>
                        <Users className='h-7 md:h-5 w-7 md:w-5 text-orange-500 dark:text-orange-400 mt-1' />
                        <p className='text-sm text-neutral-800 dark:text-neutral-200'>
                            Conducted interviews with 200+ software buyers to
                            design a seamless resale experience.
                        </p>
                    </div>
                    <div className='flex items-start gap-3'>
                        <CheckCircle className='h-7 md:h-5 w-7 md:w-5 text-teal-600 dark:text-teal-400 mt-1' />
                        <p className='text-sm text-neutral-800 dark:text-neutral-200'>
                            Secured seed funding and built the MVP with Next.js,
                            TailwindCSS, and secure APIs.
                        </p>
                    </div>
                </div>
            )
        },
        {
            title: 'Changelog',
            content: (
                <div className='space-y-4'>
                    <p className='text-sm text-neutral-800 dark:text-neutral-200'>
                        Recent updates to the SoftSell platform:
                    </p>
                    <ul className='list-none space-y-2'>
                        {[
                            '✅ New chat support with AI assistant',
                            '✅ Dark mode support across the dashboard',
                            '✅ Referral rewards program launched',
                            '✅ Improved onboarding with guided steps',
                            '✅ Seller ratings and feedback system'
                        ].map((item, i) => (
                            <li
                                key={i}
                                className='flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300'>
                                <CheckCircle className='h-4 w-4 text-green-500' />{' '}
                                {item.replace('✅ ', '')}
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
    ];

    return (
        <section id='wcu' className='section dark:!bg-zinc-900 bg-white story'>
            <Timeline data={data} />
        </section>
    );
};

export default WhyChooseUs;
