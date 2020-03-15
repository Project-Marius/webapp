import React from 'react'
import Link from 'next/link'
import Grid  from '@material-ui/core/Grid'

const TopNav = () => {
  return (
    <Grid container xs={12}>
      <Grid container direction='row' justify='space-evenly' alignItems='center'> 
        <Link href="/">
          <a><span>QBHQ</span></a>
        </Link>
        <Link href="/">
          <a><span>Events</span></a>
        </Link>
        <Link href="/">
          <a><span>Stats</span></a>
        </Link>
        <Link href="/">
          <a><span>Login</span></a>
        </Link>
        <Link href="/">
          <a><span>Signup</span></a>
        </Link>
      </Grid>
    </Grid>
  )
}

export default TopNav