import React, { Fragment, useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Container from '@mui/material/Container'

import { NEIS_OPEN_API_KEY } from '../../../config'
import { getTodayYMD } from '../../../utils'


const Class: NextPage = () => {
  const router = useRouter()
  const { schoolCode, classCode } = router.query

  const [ timeTable, setTimeTable ] = useState([])

  const timeCode = getTodayYMD()

  useEffect(() => {
    async function fetchData(schoolCode: string | string[] | undefined, classCode: string | string[] | undefined) {
      if (typeof schoolCode === 'string' && typeof classCode === 'string') {
        const response = await fetch(`https://open.neis.go.kr/hub/hisTimetable?Type=json&KEY=${NEIS_OPEN_API_KEY}&pIndex=1&pSize=1000&ATPT_OFCDC_SC_CODE=${schoolCode.split('-')[0]}&SD_SCHUL_CODE=${schoolCode.split('-')[1]}&ALL_TI_YMD=${timeCode}&GRADE=${classCode.split('-')[0]}&CLASS_NM=${classCode.split('-')[1]}`)
        const data = await response.json()
        if (data.hisTimetable) {
          setTimeTable(data.hisTimetable[1].row)
        }
      }
    }

    fetchData(schoolCode, classCode)
  }, [schoolCode, classCode, timeCode])

  return (
    <Fragment>
      <Head>
        <title>고등학교시간표</title>
        <meta name="description" content={`${typeof classCode === 'string' && classCode.split('-')[0]}학년 ${typeof classCode === 'string' && classCode.split('-')[1]}반 시간표 입니다.`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="sm">
        <h1>고등학교시간표</h1>
        {timeTable.map((item: any) => {
          return (
            <li key={`${item.PERIO}`}>
              {item.PERIO}교시: {item.ITRT_CNTNT}
            </li>
          )
        })}
      </Container>
    </Fragment>
  )
}

export default Class
