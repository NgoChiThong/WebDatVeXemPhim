package com.project.booking.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.project.booking.entity.Movie;
import com.project.booking.model.ResponseData;
import com.project.booking.repository.MovieRepository;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class MovieSevice {
    @Autowired
    MovieRepository movieRepository;

    public ResponseData<Movie> getAllMovie(){
        List<Movie> rs = movieRepository.getAllMovies();
        if(CollectionUtils.isEmpty(rs)){
            return new ResponseData(HttpStatus.NOT_FOUND, "failed", null);
        }else{
            return new ResponseData(HttpStatus.OK, "success",rs);
        }
    }

    public ResponseData<Movie> getMoviesNow(){
        List<Movie> rs = movieRepository.getMoviesNow();
        if(CollectionUtils.isEmpty(rs)){
            return new ResponseData(HttpStatus.NOT_FOUND, "failed", null);
        }else{
            return new ResponseData(HttpStatus.OK, "success",rs);
        }
    }

    public ResponseData<Movie> getMoviesFuture(){
        List<Movie> rs = movieRepository.getMoviesFuture();
        if(CollectionUtils.isEmpty(rs)){
            return new ResponseData(HttpStatus.NOT_FOUND, "failed", null);
        }else{
            return new ResponseData(HttpStatus.OK, "success", rs);
        }
    }
    public ResponseData<Movie> getMovieById(Integer movieId) {
//       Movie movie = new Movie(null, null, null, null, null, null, null, null, null);
    	 Movie movie = movieRepository.findMovieById(movieId);
        if (movie == null) {
            return new ResponseData<>(HttpStatus.NOT_FOUND, "Movie not found", null);
        }
        return new ResponseData<>(HttpStatus.OK, "success", movie);
    }
    //tim kiem phim
    public ResponseData<Movie> searchMovieByName(String keyword) {
        List<Movie> rs = movieRepository.searchByMovieName(keyword);
        if (CollectionUtils.isEmpty(rs)) {
            return new ResponseData(HttpStatus.NOT_FOUND, "No movies found with the given keyword", null);
        } else {
            return new ResponseData(HttpStatus.OK, "success", rs);
        }
    }
}
