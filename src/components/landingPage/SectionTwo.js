import React, {useState} from "react";
import LargeWrapper from "../UI/LargeWrapper";
import styles from "./SectionTwo.module.css";
import ExpandingCard from "../UI/ExpandingCard";
import CardDetails from "../UI/CardDetails"
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from "swiper";
import 'swiper/css'
import SmallWrapper from "../UI/SmallWrapper";

const SectionTwo = (props) => {
  let [view, setState] = useState({swiper:true, card:0})

  const cardClickHandler = (cardNumber) => {
    setState({swiper:false, card:cardNumber})
    console.log(cardNumber)
  }

  const cardDetailClickHandler = () => {
    setState({swiper:true, card:0})
  }

  const carousel = (
    <section className={styles["section-two"]}>
    <LargeWrapper>
      <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation
        autoplay 
        slidesPerView={3}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        spaceBetween={1}
        delay={3000}
        disableOnInteraction={false}
      ><SwiperSlide>
      <ExpandingCard card={1} onClick={cardClickHandler}>
        
        <h2>Some title 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          expedita possimus iure eius nulla incidunt voluptates reiciendis nemo
          itaque deleniti? Quis ut tenetur commodi autem ducimus. Omnis eius
          magnam sapiente, aperiam asperiores quae quis magni necessitatibus
          debitis, ipsa enim quidem nesciunt corporis a. Quos, aperiam, ipsa
          possimus a voluptatum molestiae eligendi ea aut impedit quod
          accusantium maiores et rerum mollitia alias delectus quae doloremque
          ratione cupiditate autem ipsum numquam rem! Aperiam cupiditate tempora
          aspernatur culpa officiis distinctio illo. Veniam beatae nemo minima,
          voluptatum qui architecto nihil, explicabo accusamus quaerat quod sunt
          voluptatibus ea repudiandae recusandae doloremque modi saepe nisi.
          Odio!
        </p>
        
      </ExpandingCard>
      </SwiperSlide>
      <SwiperSlide>
      <ExpandingCard card={2} onClick={cardClickHandler}>
        
        <h2>Some title 2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          expedita possimus iure eius nulla incidunt voluptates reiciendis nemo
          itaque deleniti? Quis ut tenetur commodi autem ducimus. Omnis eius
          magnam sapiente, aperiam asperiores quae quis magni necessitatibus
          debitis, ipsa enim quidem nesciunt corporis a. Quos, aperiam, ipsa
          possimus a voluptatum molestiae eligendi ea aut impedit quod
          accusantium maiores et rerum mollitia alias delectus quae doloremque
          ratione cupiditate autem ipsum numquam rem! Aperiam cupiditate tempora
          aspernatur culpa officiis distinctio illo. Veniam beatae nemo minima,
          voluptatum qui architecto nihil, explicabo accusamus quaerat quod sunt
          voluptatibus ea repudiandae recusandae doloremque modi saepe nisi.
          Odio!
        </p>
        
      </ExpandingCard>
      </SwiperSlide>
      <SwiperSlide>
      <ExpandingCard card={3} onClick={cardClickHandler}>
        
        <h2>Some title 3</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          expedita possimus iure eius nulla incidunt voluptates reiciendis nemo
          itaque deleniti? Quis ut tenetur commodi autem ducimus. Omnis eius
          magnam sapiente, aperiam asperiores quae quis magni necessitatibus
          debitis, ipsa enim quidem nesciunt corporis a. Quos, aperiam, ipsa
          possimus a voluptatum molestiae eligendi ea aut impedit quod
          accusantium maiores et rerum mollitia alias delectus quae doloremque
          ratione cupiditate autem ipsum numquam rem! Aperiam cupiditate tempora
          aspernatur culpa officiis distinctio illo. Veniam beatae nemo minima,
          voluptatum qui architecto nihil, explicabo accusamus quaerat quod sunt
          voluptatibus ea repudiandae recusandae doloremque modi saepe nisi.
          Odio!
        </p>
      </ExpandingCard>
      </SwiperSlide>
      <SwiperSlide >
      <ExpandingCard card={4} onClick={cardClickHandler}>
        
        <h2>Some title 4</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          expedita possimus iure eius nulla incidunt voluptates reiciendis nemo
          itaque deleniti? Quis ut tenetur commodi autem ducimus. Omnis eius
          magnam sapiente, aperiam asperiores quae quis magni necessitatibus
          debitis, ipsa enim quidem nesciunt corporis a. Quos, aperiam, ipsa
          possimus a voluptatum molestiae eligendi ea aut impedit quod
          accusantium maiores et rerum mollitia alias delectus quae doloremque
          ratione cupiditate autem ipsum numquam rem! Aperiam cupiditate tempora
          aspernatur culpa officiis distinctio illo. Veniam beatae nemo minima,
          voluptatum qui architecto nihil, explicabo accusamus quaerat quod sunt
          voluptatibus ea repudiandae recusandae doloremque modi saepe nisi.
          Odio!
        </p>
        
      </ExpandingCard>
      </SwiperSlide>
        <SwiperSlide >
          <ExpandingCard card={5} onClick={cardClickHandler}>
        <h2>Some title 5</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          expedita possimus iure eius nulla incidunt voluptates reiciendis nemo
          itaque deleniti? Quis ut tenetur commodi autem ducimus. Omnis eius
          magnam sapiente, aperiam asperiores quae quis magni necessitatibus
          debitis, ipsa enim quidem nesciunt corporis a. Quos, aperiam, ipsa
          possimus a voluptatum molestiae eligendi ea aut impedit quod
          accusantium maiores et rerum mollitia alias delectus quae doloremque
          ratione cupiditate autem ipsum numquam rem! Aperiam cupiditate tempora
          aspernatur culpa officiis distinctio illo. Veniam beatae nemo minima,
          voluptatum qui architecto nihil, explicabo accusamus quaerat quod sunt
          voluptatibus ea repudiandae recusandae doloremque modi saepe nisi.
          Odio!
        </p>
        </ExpandingCard>
        </SwiperSlide>
      </Swiper>
    </LargeWrapper>
    </section>
  )

  const details = (
    <section className={styles["section-two"]}>
          <CardDetails card={view.card} onClickHandler={cardDetailClickHandler}></CardDetails>    
    </section>
  )

  return (
    <>
    {view.swiper ? carousel : details}
    </>
  );
};

export default SectionTwo;
