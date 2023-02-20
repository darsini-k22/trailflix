import React from 'react'
import MovieListTable from '../components/MovieListTable'
import Navbar from '../components/Navbar'

export const MovieListPage = () => {
  return (
    <div>
      <div><Navbar/></div>
        <MovieListTable/>
    </div>
  )
}
