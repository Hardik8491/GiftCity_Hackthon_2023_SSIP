import React from 'react'
import Image from 'next/image'
import UserInfo from '@/components/UserData/UserInfo'
const AboutUs = () => {
  return (

    <div className="px-5">
      
      <div className=" flex max-md:flex-col max-md:items-stretch max-md:gap-0 sm:m-8">
      <p className="text-3xl font-medium py-4 underline ">Events</p>
        <div className="flex flex-col items-stretch w-[72%] max-md:w-full max-md:ml-0">
          <div className="text-black bg-yellow-500 p-8 sm:text-2xl max-w-[629px] mt-32 max-md:max-w-full max-md:mt-10">
            Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. <br />
            <br />
            Maecenas eget condimentum velit, sit amet feugiat lectus. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. <br />
            <br />
            Praesent auctor purus luctus enim egestas, ac scelerisque ante
            pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu
            tempor urna. Curabitur vel bibendum lorem. <br />
            <br />
            Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
            <br />
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[28%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col w-[286px] max-md:mt-10">
            <img
              loading="lazy"
              srcSet="https://www.giftgujarat.in/assets/aboutus/directors/5.png"
              className="aspect-[1] object-contain object-center w-full overflow-hidden  max-w-[234px] mt-32"
            />
            <img
              loading="lazy"
              srcSet="https://www.giftgujarat.in/assets/aboutus/directors/1.jpg"
              className="aspect-[0.73] object-contain object-center w-full overflow-hidden self-stretch grow max-w-[231px] mt-12 max-md:mr-px max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs