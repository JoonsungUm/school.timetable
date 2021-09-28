import React, { Fragment } from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Container from '@mui/material/Container'
import { classes } from 'school-info'

interface SchoolProps {
  schoolCode: string
  classInfo: any
}

const School: NextPage<SchoolProps> = ({ schoolCode, classInfo }) => {
  return (
    <Fragment>
      <Head>
        <title>고등학교시간표-학년선택</title>
        <meta name="description" content="원하는 학년을 선택해주세요." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="sm">
        <h1>고등학교시간표-학년선택</h1>
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { schoolCode }: any = params
  const classInfo: any[] = await classes({
    ATPT_OFCDC_SC_CODE: schoolCode.split('-')[0],
    SD_SCHUL_CODE: schoolCode.split('-')[1],
  })

  return {
    props: {
      schoolCode,
      classInfo,
    },
  }
}
