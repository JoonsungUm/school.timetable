import React, { Fragment } from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Container from '@mui/material/Container'
import { timetable } from 'school-info'
import { NEIS_OPEN_API_KEY } from '../../../config'


interface ClassProps {
  classCode: string
  timeTable: [object]
}

const Class: NextPage<ClassProps> = ({ classCode, timeTable }) => {
  return (
    <Fragment>
      <Head>
        <title>고등학교시간표</title>
        <meta name="description" content={`${classCode.split('-')[0]}학년 ${classCode.split('-')[1]}반 시간표 입니다.`} />
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { schoolCode, classCode }: any = params

  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const date = today.getDate()

  const timeCode = `${year}${month >= 10 ? month : '0' + month}${date >= 10 ? date : '0' + date}`

  const timeTable: any = await timetable({
    KEY: NEIS_OPEN_API_KEY,
    ATPT_OFCDC_SC_CODE: schoolCode.split('-')[0],
    SD_SCHUL_CODE: schoolCode.split('-')[1],
    SCHUL_KND_SC_NM: '고등학교',
    GRADE: classCode.split('-')[0],
    CLASS_NM: classCode.split('-')[1],
    ALL_TI_YMD: timeCode,
  })

  return {
    props: {
      classCode,
      timeTable,
    },
  }
}
