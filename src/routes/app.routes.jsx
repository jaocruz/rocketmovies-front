import { Routes, Route } from 'react-router-dom';

import { Home } from "../pages/home";
import { Profile } from "../pages/profile";
import { CreateMovie } from "../pages/createMovie";
import { MoviePreview } from "../pages/moviePreview";

export function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/createmovie' element={<CreateMovie/>} />
      <Route path='/moviepreview/:id' element={<MoviePreview/>} />
    </Routes>
  )
}