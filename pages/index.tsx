import React, { Fragment } from 'react'
import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Container from '@mui/material/Container'
import { search } from 'school-info'


interface HomeProps {
  schoolInfo: any
}

const Home: NextPage<HomeProps> = ({ schoolInfo }) => {
  return (
    <Fragment>
      <Head>
        <title>고등학교시간표-학교선택</title>
        <meta name="description" content="원하는 학교를 선택해주세요." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="sm">
        <h1>고등학교시간표-학교선택</h1>
        <a href={`/${schoolInfo.ATPT_OFCDC_SC_CODE}-${schoolInfo.SD_SCHUL_CODE}`}>남해정보산업고등학교</a>
      </Container>
    </Fragment>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const schoolInfo: any[] = await search({ SCHUL_NM: '남해정보산업고등학교' })

  return {
    props: {
      schoolInfo: schoolInfo[0],
    },
  }
}
