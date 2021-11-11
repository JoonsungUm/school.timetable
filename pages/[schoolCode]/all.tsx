import React, { Fragment, useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'

import { styled } from '@mui/material/styles'

import { NEIS_OPEN_API_KEY } from '../../config'
import { getTodayYMD } from '../../utils'


const PageTitle = styled(Typography)`
  margin: 40px;
`

const TableLayout = styled(Table)`
  min-width: 650px;
`

const THead = styled(TableHead)`
  background-color: #017932;
  th {
    color: white;
  }
`

const Row = styled(TableRow)`
`

const TBody = styled(TableBody)`
`

const Cell = styled(TableCell)`
  padding: 8px 16px;
  font-size: 32px;
  font-weight: 700;
`


const getClassContent = (timeTable: any, grade: string, className: string, perio: string) => {
  return timeTable.map((item: any) => {
    if (item.GRADE === grade && item.CLASS_NM === className && item.PERIO === perio) {
      return item.ITRT_CNTNT
    }
  })
}

const AllClass: NextPage = () => {
  const router = useRouter()
  const { schoolCode } = router.query

  const [ timeTable, setTimeTable ] = useState([])

  const timeCode = getTodayYMD()

  useEffect(() => {
    async function fetchData(schoolCode: string | string[] | undefined) {
      if (typeof schoolCode === 'string') {
        const response = await fetch(`https://open.neis.go.kr/hub/hisTimetable?Type=json&KEY=${NEIS_OPEN_API_KEY}&pIndex=1&pSize=1000&ATPT_OFCDC_SC_CODE=${schoolCode.split('-')[0]}&SD_SCHUL_CODE=${schoolCode.split('-')[1]}&ALL_TI_YMD=${timeCode}`)
        const data = await response.json()
        if (data.hisTimetable) {
          setTimeTable(data.hisTimetable[1].row)
        }
      }
    }

    fetchData(schoolCode)
  }, [schoolCode, timeCode])

  return (
    <Fragment>
      <Head>
        <title>남해정보산업고등학교 시간표</title>
        <meta name="description" content="남해정보산업고 전체 학년의 시간표" />
        <meta httpEquiv="refresh" content="10; url=https://school.stave.kr" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Container maxWidth={false}>
        <Box sx={{ height: 28, width: '100%' }} />
        <TableContainer component={Paper}>
          <TableLayout aria-label="simple table">
            <THead>
              <Row>
                <Cell align="center"></Cell>
                <Cell align="center" width="31%">1학년 1반</Cell>
                <Cell align="center" width="31%">2학년 1반</Cell>
                <Cell align="center" width="31%">3학년 1반</Cell>
              </Row>
            </THead>
            <TBody>
              <Row>
                <Cell align="center">1교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '1', '1')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '1', '1')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '1', '1')}</Cell>
              </Row>
              <Row>
                <Cell align="center">2교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '1', '2')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '1', '2')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '1', '2')}</Cell>
              </Row>
              <Row>
                <Cell align="center">3교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '1', '3')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '1', '3')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '1', '3')}</Cell>
              </Row>
              <Row>
                <Cell align="center">4교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '1', '4')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '1', '4')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '1', '4')}</Cell>
              </Row>
              <Row>
                <Cell align="center">5교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '1', '5')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '1', '5')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '1', '5')}</Cell>
              </Row>
              <Row>
                <Cell align="center">6교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '1', '6')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '1', '6')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '1', '6')}</Cell>
              </Row>
              <Row>
                <Cell align="center">7교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '1', '7')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '1', '7')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '1', '7')}</Cell>
              </Row>
            </TBody>
          </TableLayout>
        </TableContainer>

        <br />

        <TableContainer component={Paper}>
          <TableLayout aria-label="simple table">
            <THead>
              <Row>
                <Cell align="center"></Cell>
                <Cell align="center" width="31%">1학년 2반</Cell>
                <Cell align="center" width="31%">2학년 2반</Cell>
                <Cell align="center" width="31%">3학년 2반</Cell>
              </Row>
            </THead>
            <TBody>
              <Row>
                <Cell align="center">1교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '2', '1')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '2', '1')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '2', '1')}</Cell>
              </Row>
              <Row>
                <Cell align="center">2교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '2', '2')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '2', '2')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '2', '2')}</Cell>
              </Row>
              <Row>
                <Cell align="center">3교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '2', '3')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '2', '3')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '2', '3')}</Cell>
              </Row>
              <Row>
                <Cell align="center">4교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '2', '4')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '2', '4')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '2', '4')}</Cell>
              </Row>
              <Row>
                <Cell align="center">5교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '2', '5')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '2', '5')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '2', '5')}</Cell>
              </Row>
              <Row>
                <Cell align="center">6교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '2', '6')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '2', '6')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '2', '6')}</Cell>
              </Row>
              <Row>
                <Cell align="center">7교시</Cell>
                <Cell align="center">{getClassContent(timeTable, '1', '2', '7')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '2', '2', '7')}</Cell>
                <Cell align="center">{getClassContent(timeTable, '3', '2', '7')}</Cell>
              </Row>
            </TBody>
          </TableLayout>
        </TableContainer>
      </Container>
    </Fragment>
  )
}

export default AllClass
