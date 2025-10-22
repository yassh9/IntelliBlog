import React from 'react'

const footerSections = [
  {
    heading: 'Quick Links',
    links: ['Home', 'Best Sellers', 'Offers & Deals', 'Contact Us', 'FAQs'],
  },
  {
    heading: 'Need help?',
    links: [
      'Delivery Information',
      'Return & Refund Policy',
      'Payment Methods',
      'Track Your Order',
      'Contact Us',
    ],
  },
  {
    heading: 'Follow Us',
    links: ['Instagram', 'Twitter', 'Facebook', 'YouTube'],
  },
]

const Footer = () => {
  return (
    <footer className='bg-[#f5f7fc] border-t border-[#d8dde5] text-gray-600'>
      <div className='mx-auto w-full max-w-7xl px-8 sm:px-12 lg:px-20 py-10 flex flex-col gap-10'>
        <div className='grid gap-12 lg:gap-14 lg:grid-cols-5'>
          <div className='flex flex-col gap-5 lg:col-span-2 max-w-xl'>
            <div className='flex items-center gap-3 text-gray-900'>
              <div className='h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center'>
                <img src="/favicon.svg" alt="logo" />
              </div>
              <h2 className='text-3xl font-semibold'>IntelliBlog</h2>
            </div>
            <p className='leading-7 text-gray-500'>
              This is your space to think out loud, to share what matters, and to write without filters. Whether it’s one word or a thousand, your story starts right here.
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.heading} className='flex flex-col gap-4'>
              <h3 className='text-lg font-semibold text-gray-900'>{section.heading}</h3>
              <ul className='space-y-3 text-sm sm:text-base'>
                {section.links.map((link) => (
                  <li key={link} className='cursor-pointer transition-colors hover:text-primary'>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='border-t border-[#d8dde5]' />
        <p className='text-center text-sm text-gray-500'>
          Copyright 2025 © QuickBlog All Right Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
