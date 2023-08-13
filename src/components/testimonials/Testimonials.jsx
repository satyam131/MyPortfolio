import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar: AVTR1,
    name: 'Satyam',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quaerat. Incidunt quisquam distinctio saepe animi molestias rerum quasi at? Repellat provident animi debitis ducimus recusandae. Minima enim quos accusantium nemo.'
  },
  {
    avatar: AVTR1,
    name: 'rahul',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quaerat. Incidunt quisquam distinctio saepe animi molestias rerum quasi at? Repellat provident animi debitis ducimus recusandae. Minima enim quos accusantium nemo.'
  },
  {
    avatar: AVTR1,
    name: 'pranav',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quaerat. Incidunt quisquam distinctio saepe animi molestias rerum quasi at? Repellat provident animi debitis ducimus recusandae. Minima enim quos accusantium nemo.'
  },
  {
    avatar: AVTR1,
    name: 'rohit',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quaerat. Incidunt quisquam distinctio saepe animi molestias rerum quasi at? Repellat provident animi debitis ducimus recusandae. Minima enim quos accusantium nemo.'
  },
  {
    avatar: AVTR1,
    name: 'ambuj',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quaerat. Incidunt quisquam distinctio saepe animi molestias rerum quasi at? Repellat provident animi debitis ducimus recusandae. Minima enim quos accusantium nemo.'
  },
  {
    avatar: AVTR1,
    name: 'abhinav',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quaerat. Incidunt quisquam distinctio saepe animi molestias rerum quasi at? Repellat provident animi debitis ducimus recusandae. Minima enim quos accusantium nemo.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>

        {
          data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
            </SwiperSlide>
          )
        })
        }

      </Swiper>
    </section >
  )
}

export default Testimonials