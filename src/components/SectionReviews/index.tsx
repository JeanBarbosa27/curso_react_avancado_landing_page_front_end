import React from 'react'
import Slider from 'react-slick'

import Container from 'components/Container'
import Heading from 'components/Heading'
import ReviewCard from 'components/ReviewCard'

import * as S from './styles'
import { SectionReviewsProps } from 'types/api'

const settings = {
  dots: true,
  arrows: false,
  slidesToShow: 2,
  infinite: false,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const SectionReviews = ({ title, review: reviews }: SectionReviewsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      <Slider {...settings}>
        {reviews.map(({ name, photo, text, id }) => {
          const image = photo ? photo.url : ''

          return (
            <ReviewCard
              key={id}
              name={name}
              image={image}
              description={text}
              id={parseInt(id)}
            />
          )
        })}
      </Slider>
    </S.Content>
  </Container>
)

export default SectionReviews
