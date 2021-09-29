import React, { Fragment } from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { timetable } from 'school-info'
import { NEIS_OPEN_API_KEY } from '../../config'


interface AllClassProps {
  timeTable: any
}

const AllClass: NextPage<AllClassProps> = ({ timeTable }) => {
  console.log(timeTable)
  return (
    <Fragment>
      <Head>
        <title>고등학교시간표</title>
        <meta name="description" content="전체 학년의 시간표입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl">
        <h1>고등학교시간표</h1>

        <Box sx={{
          display: 'grid',
          margin: '0 20px',
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}>
          <Grid container spacing={{ xs: 2, md: 3, lg: 3, xl: 3}}>
            <Card>
              {timeTable.map((item: any) => {
                return item.GRADE === '1' && item.CLASS_NM === '1' && (
                  <li key={`${item.GRADE}-${item.CLASS_NM}`}>
                    {item.PERIO}교시: {item.ITRT_CNTNT}
                  </li>
                )
              })}
            </Card>
            <Card>
              {timeTable.map((item: any) => {
                return item.GRADE === '1' && item.CLASS_NM === '2' && (
                  <li key={`${item.GRADE}-${item.CLASS_NM}`}>
                    {item.PERIO}교시: {item.ITRT_CNTNT}
                  </li>
                )
              })}
            </Card>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3, lg: 3, xl: 3}}>
            <Card>
              {timeTable.map((item: any) => {
                return item.GRADE === '2' && item.CLASS_NM === '1' && (
                  <li key={`${item.GRADE}-${item.CLASS_NM}`}>
                    {item.PERIO}교시: {item.ITRT_CNTNT}
                  </li>
                )
              })}
            </Card>
            <Card>
              {timeTable.map((item: any) => {
                return item.GRADE === '2' && item.CLASS_NM === '2' && (
                  <li key={`${item.GRADE}-${item.CLASS_NM}`}>
                    {item.PERIO}교시: {item.ITRT_CNTNT}
                  </li>
                )
              })}
            </Card>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3, lg: 3, xl: 3}}>
            <Card>
              {timeTable.map((item: any) => {
                return item.GRADE === '3' && item.CLASS_NM === '1' && (
                  <li key={`${item.GRADE}-${item.CLASS_NM}`}>
                    {item.PERIO}교시: {item.ITRT_CNTNT}
                  </li>
                )
              })}
            </Card>
            <Card>
              {timeTable.map((item: any) => {
                return item.GRADE === '3' && item.CLASS_NM === '2' && (
                  <li key={`${item.GRADE}-${item.CLASS_NM}`}>
                    {item.PERIO}교시: {item.ITRT_CNTNT}
                  </li>
                )
              })}
            </Card>
          </Grid>
        </Box>
      </Container>
    </Fragment>
  )
}

export default AllClass

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { schoolCode, classCode }: any = params

  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const date = today.getDate()

  const timeCode = `${year}${month >= 10 ? month : '0' + month}${date >= 10 ? date : '0' + date}`

  console.log(timeCode)

  const timeTable: any = await timetable({
    KEY: NEIS_OPEN_API_KEY,
    ATPT_OFCDC_SC_CODE: schoolCode.split('-')[0],
    SD_SCHUL_CODE: schoolCode.split('-')[1],
    SCHUL_KND_SC_NM: '고등학교',
    ALL_TI_YMD: timeCode,
  })

  console.log(timeTable)
  return {
    props: {
      timeTable
    },
  }
}
