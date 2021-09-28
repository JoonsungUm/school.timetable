import React, { Fragment } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '@mui/material/Container'


const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>고등학교시간표-학교선택</title>
        <meta name="description" content="원하는 학교를 선택해주세요." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="sm">
        <h1>고등학교시간표-학교선택</h1>
        <a>남해정보산업고등학교</a>
      </Container>
    </Fragment>
  )
}

export default Home
