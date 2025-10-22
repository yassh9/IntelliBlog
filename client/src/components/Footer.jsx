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
      <div className='mx-6 sm:mx-12 lg:mx-24 xl:mx-32 py-14 flex flex-col gap-12'>
        <div className='grid gap-12 lg:grid-cols-[minmax(0,1.7fr)_repeat(3,minmax(0,1fr))]'>
          <div className='flex flex-col gap-5 max-w-xl'>
            <div className='flex items-center gap-3 text-gray-900'>
              <div className='h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center'>
                <img src="./favicon.svg" alt="logo" />
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
