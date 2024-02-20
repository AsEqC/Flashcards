import { useNavigate } from 'react-router-dom'

import pageNotFoundPng from '@/assets/images/404.png'
import { Button } from '@/common/components/ui/button'
import { Typography } from '@/common/components/ui/typography'

import s from './page-not-found.module.scss'
export const PageNotFound = () => {
  const navigate = useNavigate()
  const navigateHandler = () => navigate('/')

  return (
    <div className={s.container}>
      <img alt={'not found'} className={s.img} src={pageNotFoundPng} />
      <Typography as={'h2'} variant={'body1'}>
        Sorry! Page not found!
      </Typography>
      <Button as={'button'} onClick={navigateHandler}>
        Back to home page
      </Button>
    </div>
  )
}
