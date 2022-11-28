import { Container } from '@mui/material'
import React from 'react'
import BlogCard from '../components/BlogCard'

const Dashboard = () => {
  return (
    <div>
    <Container sx={{ mt:2}}>
    <BlogCard/>
    </Container>
    </div>
  )
}

export default Dashboard