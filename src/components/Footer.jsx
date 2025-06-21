import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <div className='bg-slate-100'>
      <div className='container'>
        <div className=' grid grid-cols-1 md:grid-cols-3'>
          <FooterHead
            title='Careers'
            desc='Come join the team'
            link='Browse Opportunities'
          />
          <FooterHead
            title='Tims For Good'
            desc='Small changes, big impact'
            link='Learn More'
          />
          <FooterHead
            title='Find a Tim Hortons'
            desc='We can`t wait to serve you'
            link='Store Locator'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 border-t-1 border-b-1 border-[rgba(0,0,0,.1)]'>
          <FooterHead
            title='Careers'
            desc='Come join the team'
            link='Browse Opportunities'
          />
          <FooterHead
            title='Tims For Good'
            desc='Small changes, big impact'
            link='Learn More'
          />
          <FooterHead
            title='Find a Tim Hortons'
            desc='We can`t wait to serve you'
            link='Store Locator'
          />
        </div>
        <div className='py-5 grid grid-cols-1 md:grid-cols-2'>
          <div>TM & © Tim Hortons, 2025</div>
          <div>TM & © Tim Hortons, 2025</div>
        </div>
      </div>
    </div>
  );
}

function FooterHead({ title, desc, link }) {
  return (
    <div className='py-[3.5rem]'>
      <h2 className='text-base font-bold'>{title}</h2>
      <div>{desc}</div>
      <Link to='' className='font-semibold'>
        {link}
      </Link>
    </div>
  );
}
