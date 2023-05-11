/* eslint-disable @typescript-eslint/ban-types */
import DashBoardBox from '@/components/DashboardBox'
import React from 'react'



type Props = {}

const Row2 = (props: Props) => {
  return (
    <>
    <DashBoardBox sx={{ gridArea: "d", }}></DashBoardBox>
    <DashBoardBox sx={{ gridArea: "e",  }}></DashBoardBox>
    <DashBoardBox sx={{ gridArea: "f",  }}></DashBoardBox>
    </>
  )
}

export default Row2