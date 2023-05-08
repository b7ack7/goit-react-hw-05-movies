import { Routes, Route, Navigate } from "react-router";
import { lazy } from "react";
import { SharedLayout } from "components/SharedLayout";


const Home = lazy(() => import("pages/Home"));
const Movies = lazy(() => import ("pages/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const Cast = lazy(() => import("components/Cast").then(module => {
  return { 
    ...module,
    default: module.Cast
  }
}));
const Reviews = lazy(() => import("components/Reviews").then(module => {
  return { 
    ...module,
    default: module.Reviews
  }
}));



export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
         <Route index element={<Home/>}/>
         <Route path="/movies" element={<Movies/>}/>
         <Route path="/movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews/>}/>
         </Route>
         <Route path="*" element={<Navigate to="/"/>}/>
        </Route>
      </Routes>
  );
};
