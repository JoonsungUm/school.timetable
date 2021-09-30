import React, { Fragment } from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Container from '@mui/material/Container'

import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { styled } from '@mui/material/styles'

import { timetable } from 'school-info'
import { NEIS_OPEN_API_KEY } from '../../config'


const Cell = styled(TableCell)`
  padding: 8px 16px;
`

interface AllClassProps {
  timeTable: any
}

const getClassContent = (timeTable: any, grade: string, className: string, perio: string) => {
  return timeTable.map((item: any) => {
    if (item.GRADE === grade && item.CLASS_NM === className && item.PERIO === perio) {
      return item.ITRT_CNTNT
    }
  })
}

const AllClass: NextPage<AllClassProps> = ({ timeTable }) => {
  return (
    <Fragment>
      <Head>
        <title>고등학교시간표</title>
        <meta name="description" content="전체 학년의 시간표입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl">
        <Typography align="center" variant="h5" gutterBottom component="div" mt="10px">
          남해정보산업고등학교 시간표
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <Cell align="center"></Cell>
                <Cell align="center">1학년 1반</Cell>
                <Cell align="center">2학년 1반</Cell>
                <Cell align="center">3학년 1반</Cell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <Cell align="center">1교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '1', '1')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '1', '1')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '1', '1')}</Cell>
              </TableRow>
              <TableRow>
                <Cell align="center">2교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '1', '2')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '1', '2')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '1', '2')}</Cell>
              </TableRow>
              <TableRow>
                <Cell align="center">3교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '1', '3')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '1', '3')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '1', '3')}</Cell>
              </TableRow>
              <TableRow>
                <Cell align="center">4교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '1', '4')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '1', '4')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '1', '4')}</Cell>
              </TableRow>
              <TableRow>
                <Cell align="center">5교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '1', '5')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '1', '5')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '1', '5')}</Cell>
              </TableRow>
              <TableRow>
                <Cell align="center">6교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '1', '6')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '1', '6')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '1', '6')}</Cell>
              </TableRow>
              <TableRow>
                <Cell align="center">7교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '1', '7')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '1', '7')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '1', '7')}</Cell>
              </TableRow>
              <TableRow>
                <Cell align="center">8교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '1', '8')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '1', '8')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '1', '8')}</Cell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <br />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <Cell align="center"></Cell>
                <Cell align="center">1학년 2반</Cell>
                <Cell align="center">2학년 2반</Cell>
                <Cell align="center">3학년 2반</Cell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <Cell align="center">1교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '2', '1')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '2', '1')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '2', '1')}</Cell>
              </TableRow>
              <TableRow>
                <Cell align="center">2교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '2', '2')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '2', '2')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '2', '2')}</Cell>
              </TableRow>
              <TableRow>
                <Cell align="center">3교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '2', '3')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '2', '3')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '2', '3')}</Cell>
              </TableRow>
              <TableRow>
                <Cell align="center">4교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '2', '4')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '2', '4')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '2', '4')}</Cell>
              </TableRow>
              <TableRow>
                <Cell align="center">5교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '2', '5')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '2', '5')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '2', '5')}</Cell>
              </TableRow>
              <TableRow>
                <Cell align="center">6교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '2', '6')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '2', '6')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '2', '6')}</Cell>
              </TableRow>
              <TableRow>
                <Cell align="center">7교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '2', '7')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '2', '7')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '2', '7')}</Cell>
              </TableRow>
              <TableRow>
                <Cell align="center">8교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '2', '8')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '2', '8')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '2', '8')}</Cell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

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

  return {
    props: {
      timeTable
    },
  }
}
