import React, { useMemo } from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { PricingBoxProps } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({
  totalPrice,
  installmentsNumber,
  installmentPrice,
  benefits,
  button
}: PricingBoxProps) => {
  const discount = useMemo(() => installmentsNumber * installmentPrice, [
    installmentsNumber,
    installmentPrice
  ])
  return (
    <S.Box>
      <S.Prices>
        <S.FullPrice>
          De <span>R${totalPrice}</span> por apenas
        </S.FullPrice>
        <S.DiscountPrice>
          <span>{installmentsNumber}x de</span> R${installmentPrice}
        </S.DiscountPrice>
      </S.Prices>
      <S.BenefitsList dangerouslySetInnerHTML={{ __html: benefits }} />

      <Button href={button.url} onClick={onClick} withPrice>
        <p>{button.label}</p>
        <div>
          <S.ButtonFullPrice>R${totalPrice}</S.ButtonFullPrice>
          <S.ButtonDiscountPrice>R${discount}</S.ButtonDiscountPrice>
        </div>
      </Button>
    </S.Box>
  )
}

export default PricingBox
