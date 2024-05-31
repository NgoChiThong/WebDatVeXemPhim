package com.project.booking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.booking.entity.Movie;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {
    // get phim đang chiếu
    // SELECT * FROM `movies` WHERE `movie_release` = CURRENT_DATE OR `movie_release` < CURRENT_DATE
    @Query(value = "SELECT `movie_id`,`movie_name`,`movie_description`,`movie_trailer`,`movie_cens`,`movie_genres`,DATE_FORMAT(`movie_release`, \"%d/%m/%Y\") as `movie_release`,`movie_lenght`,`movie_format`,`movie_poster` FROM `movies` WHERE `movie_release` = CURRENT_DATE OR `movie_release` < CURRENT_DATE", nativeQuery = true)
    List<Movie> getMoviesNow();
    // get phim sắp chiếu
    // SELECT * FROM `movies` WHERE `movie_release` > CURRENT_DATE
    @Query(value = "SELECT `movie_id`,`movie_name`,`movie_description`,`movie_trailer`,`movie_cens`,`movie_genres`,DATE_FORMAT(`movie_release`, \"%d/%m/%Y\") as `movie_release`,`movie_lenght`,`movie_format`,`movie_poster` FROM `movies` WHERE `movie_release` > CURRENT_DATE", nativeQuery = true)
    List<Movie> getMoviesFuture();
    //lay phim theo id
    @Query(value = "SELECT * FROM movies WHERE movie_id = :movieId", nativeQuery = true)
    Movie findMovieById(@Param("movieId") Integer movieId);
    //lay toan bo phim
    @Query(value = "SELECT `movie_id`,`movie_name`,`movie_description`,`movie_trailer`,`movie_cens`,`movie_genres`,DATE_FORMAT(`movie_release`, \"%d/%m/%Y\") as `movie_release`,`movie_lenght`,`movie_format`,`movie_poster` FROM `movies` ORDER BY movie_id DESC", nativeQuery = true)
    List<Movie> getAllMovies();
}
