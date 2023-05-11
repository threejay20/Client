/* eslint-disable @typescript-eslint/ban-types */
import DashBoardBox from '@/components/DashboardBox'
import React from 'react'

type Props = {}

const Row3 = (props: Props) => {
  return (
    <>
    <DashBoardBox sx={{ gridArea: "g", }}></DashBoardBox>
    <DashBoardBox sx={{ gridArea: "h",  }}></DashBoardBox>
    <DashBoardBox sx={{ gridArea: "i", }}></DashBoardBox>
    <DashBoardBox sx={{ gridArea: "j", }}></DashBoardBox>

    </>
  )
}

export default Row3