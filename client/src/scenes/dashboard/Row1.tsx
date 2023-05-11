import DashBoardBox from '@/components/DashboardBox'
import { useGetKpisQuery } from '@/state/api'
import React from 'react'


// eslint-disable-next-line 
type Props = {}

const Row1 = (props: Props) => {
    const { data } = useGetKpisQuery ();
    
  return (
    <>
    <DashBoardBox sx={{ gridArea: "a",  }}></DashBoardBox>
    <DashBoardBox sx={{ gridArea: "b",  }}></DashBoardBox>
    <DashBoardBox sx={{ gridArea: "c",  }}></DashBoardBox>
    </>
  )
}

export default Row1