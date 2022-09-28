import React from "react";
import "./testimonial.css";
import AVRT1 from "../../assets/avatar1.jpg";
import AVRT2 from "../../assets/avatar2.jpg";
import AVRT3 from "../../assets/avatar3.jpg";
import AVRT4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    name: "shatta wale",
    avatar: AVRT1,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, rem nesciunt placeat quisquam vitae autem quas! Inventore enim consectetur velit. Id minima nemo accusantium assumenda esse ratione neque, rerum voluptatibus?",
  },
  {
    id: 2,
    name: "John wale",
    avatar: AVRT2,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, rem nesciunt placeat quisquam vitae autem quas! Inventore enim consectetur velit. Id minima nemo accusantium assumenda esse ratione neque, rerum voluptatibus?",
  },
  {
    id: 3,
    name: "joe happy",
    avatar: AVRT3,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, rem nesciunt placeat quisquam vitae autem quas! Inventore enim consectetur velit. Id minima nemo accusantium assumenda esse ratione neque, rerum voluptatibus?",
  },
  {
    id: 4,
    name: "Mata matt",
    avatar: AVRT4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, rem nesciunt placeat quisquam vitae autem quas! Inventore enim consectetur velit. Id minima nemo accusantium assumenda esse ratione neque, rerum voluptatibus?",
  },
];

function Testimonial() {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ id, name, avatar, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avater">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonial;
