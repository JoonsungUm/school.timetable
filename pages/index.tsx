import React, { Fragment, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import Container from '@mui/material/Container'

import { NEIS_OPEN_API_KEY } from '../config'


const Home: NextPage = () => {
  const [ schoolInfo, setSchoolInfo ] = useState([{
    ATPT_OFCDC_SC_CODE: '',
    SD_SCHUL_CODE: '',
  }])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://open.neis.go.kr/hub/schoolInfo?Type=json&KEY=${NEIS_OPEN_API_KEY}&pIndex=1&pSize=1000&SCHUL_NM=남해정보산업고등학교`)
      const data = await response.json()

      if (data.schoolInfo) {
        setSchoolInfo(data.schoolInfo[1].row)
      }
    }

    fetchData()
  }, [])

  return (
    <Fragment>
      <Head>
        <title>고등학교시간표-학교선택</title>
        <meta name="description" content="원하는 학교를 선택해주세요." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="sm">
        <h1>고등학교시간표-학교선택</h1>
        <a href={`/${schoolInfo[0].ATPT_OFCDC_SC_CODE}-${schoolInfo[0].SD_SCHUL_CODE}`}>남해정보산업고등학교</a>
      </Container>
    </Fragment>
  )
}

export default Home
