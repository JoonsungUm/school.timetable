import React, { Fragment, useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Container from '@mui/material/Container'
import { NEIS_OPEN_API_KEY } from '../../config'


const School: NextPage = () => {
  const router = useRouter()
  const { schoolCode } = router.query

  const [ classInfo, setClassInfo ] = useState([])

  const today = new Date()
  const year = today.getFullYear()

  useEffect(() => {
    async function fetchData(schoolCode: string | string[] | undefined) {
      if (typeof schoolCode === 'string') {
        const response = await fetch(`https://open.neis.go.kr/hub/classInfo?Type=json&KEY=${NEIS_OPEN_API_KEY}&pIndex=1&pSize=1000&ATPT_OFCDC_SC_CODE=${schoolCode.split('-')[0]}&SD_SCHUL_CODE=${schoolCode.split('-')[1]}&AY=${year}`)
        const data = await response.json()
        if (data.classInfo) {
          setClassInfo(data.classInfo[1].row)
        }
      }
    }

    fetchData(schoolCode)
  }, [schoolCode, year])

  return (
    <Fragment>
      <Head>
        <title>고등학교시간표-학년선택</title>
        <meta name="description" content="원하는 학년을 선택해주세요." />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Container maxWidth="sm">
        <h1>고등학교시간표-학년선택</h1>
        <li>
          <a href={`/${schoolCode}/all`}>
            전체 시간표 보기
          </a>
        </li>
        <br />
        {classInfo.map((item: any) => {
          return (
            <li key={`${item.GRADE}-${item.CLASS_NM}`}>
              <a href={`/${schoolCode}/${item.GRADE}-${item.CLASS_NM}`}>
                {`${item.GRADE}학년 ${item.CLASS_NM}반 ${item.DDDEP_NM}`}
              </a>
            </li>
          )
        })}
      </Container>
    </Fragment>
  )
}

export default School
