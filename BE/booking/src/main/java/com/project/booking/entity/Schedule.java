package com.project.booking.entity;

import javax.persistence.*;

import com.project.booking.model.ResponseCinema;
import com.project.booking.model.ResponseFormat;
import com.project.booking.model.ResponseScheduleCinema;
import com.project.booking.model.ResponseScheduleTime;
@SqlResultSetMappings({
        @SqlResultSetMapping(
                name = "ResponseScheduleTime",
                classes = @ConstructorResult(
                        targetClass = ResponseScheduleTime.class,
                        columns = {
                                @ColumnResult(name = "schedule_id", type = Integer.class),
                                @ColumnResult(name = "schedule_start", type = String.class)
                        }
                )
        ),
        @SqlResultSetMapping(
                name = "ResponseFormat",
                classes = @ConstructorResult(
                        targetClass = ResponseFormat.class,
                        columns = {
                                @ColumnResult(name = "movie_format")
                        }
                )
        ),
        @SqlResultSetMapping(
                name = "ResponseCinema",
                classes = @ConstructorResult(
                        targetClass = ResponseCinema.class,
                        columns = {
                                @ColumnResult(name = "cinema_id"),
                                @ColumnResult(name = "cinema_name"),
                                @ColumnResult(name = "cinema_address")
                        }
                )
        ),
        @SqlResultSetMapping(
                name = "showSchedule",
                classes = @ConstructorResult(
                        targetClass = ResponseScheduleCinema.class,
                        columns = {
                                @ColumnResult(name = "cinema_id"),
                                @ColumnResult(name = "cinema_name"),
                                @ColumnResult(name = "cinema_data", type= String.class)
                        }
                )
        )

})
@NamedNativeQuery(name = "getScheduleTimeByFilm", resultSetMapping = "ResponseScheduleTime",
        query = "SELECT `schedule`.`schedule_id`, `schedule`.`schedule_start` FROM `movies`,`schedule`,`room`,`cinemas` WHERE `movies`.`movie_id` = `schedule`.`movie_id` AND `schedule`.`room_id` = `room`.`room_id`AND `room`.`cinema_id` = `cinemas`.`cinema_id` AND `movies`.`movie_id` = ?1 AND `schedule`.`schedule_date` = ?2 AND `cinemas`.`cinema_id` = ?3")

@NamedNativeQuery(name = "getScheduleFormat", resultSetMapping = "ResponseFormat",
        query = "SELECT `movies`.`movie_format` FROM `movies`,`schedule`,`room`,`cinemas` WHERE `movies`.`movie_id` = `schedule`.`movie_id` AND `schedule`.`room_id` = `room`.`room_id`AND `room`.`cinema_id` = `cinemas`.`cinema_id` AND `movies`.`movie_id` = ?1 AND `schedule`.`schedule_date` = ?2 AND `cinemas`.`cinema_id` = ?3 GROUP BY `movies`.`movie_format`")

@NamedNativeQuery(name = "getResponseCinema", resultSetMapping = "ResponseCinema",
        query = "SELECT `cinemas`.* FROM `cinemas`, `schedule`, `room` WHERE `schedule`.`room_id` = `room`.`room_id` AND `room`.`cinema_id` = `cinemas`.`cinema_id` AND `schedule`.`movie_id` = ?1 AND `schedule`.`schedule_date` = ?2")

//@NamedNativeQuery(name = "showSchedule", resultSetMapping = "showSchedule", query = "SELECT d.cinema_id, d.cinema_name, ( JSON_ARRAYAGG(JSON_OBJECT('schedule_id',d.schedule_id,'schedule_start',TIME_FORMAT(schedule_start,'%H:%i'),'seat_empty',d.seatempty)) ) cinema_data FROM ( SELECT sdl.schedule_id, sdl.schedule_start, cinemas.cinema_id, cinemas.cinema_name, ( SELECT COUNT(seats.seat_id) slots FROM seats seats WHERE seats.room_id = room.room_id AND seats.seat_id NOT IN ( SELECT booking.seat_id FROM booking booking WHERE booking.schedule_id = sdl.schedule_id ) ) seatempty FROM schedule sdl INNER JOIN room room ON sdl.room_id = room.room_id INNER JOIN cinemas cinemas ON cinemas.cinema_id = room.cinema_id WHERE sdl.movie_id = ?1 AND sdl.schedule_date = ?2 ) d GROUP BY d.cinema_id, d.cinema_name")
//@NamedNativeQuery(name = "showSchedule", resultSetMapping = "showSchedule", query = "SELECT cinema_id, cinema_name, cinema_address, (SELECT JSON_ARRAYAGG(JSON_OBJECT('format_film',d.movie_format,'format_data',d.format_data)) FROM (SELECT movie_format, JSON_ARRAYAGG(JSON_OBJECT('schedule_id', schedule.schedule_id, 'schedule_start', TIME_FORMAT(schedule.schedule_start, \"%H:%i\"))) AS format_data FROM movies movies INNER JOIN schedule schedule ON schedule.movie_id = movies.movie_id INNER JOIN room room ON room.room_id = schedule.room_id WHERE schedule.schedule_date = '2019-11-20' AND room.cinema_id = cinema_id  GROUP BY movies.movie_format) d ) AS cinema_data FROM cinemas cinemas")
//@NamedNativeQuery(name = "showSchedule", resultSetMapping = "showSchedule", query = "SELECT cinema_id, cinema_name, cinema_address, (SELECT JSON_ARRAYAGG(JSON_OBJECT('format_film',d.movie_format,'format_data',d.format_data)) FROM (SELECT movie_format, JSON_ARRAYAGG(JSON_OBJECT('schedule_id', schedule.schedule_id, 'schedule_start', TIME_FORMAT(schedule.schedule_start, \"%H:%i\"))) AS format_data FROM movies movies INNER JOIN schedule schedule ON schedule.movie_id = movies.movie_id INNER JOIN room room ON room.room_id = schedule.room_id INNER JOIN cinemas cinemas ON cinemas.cinema_id = room.cinema_id WHERE schedule.schedule_date = '2019-11-20' GROUP BY movies.movie_format) d ) AS cinema_data FROM cinemas cinemas\n")
@NamedNativeQuery(name = "showSchedule", resultSetMapping = "showSchedule", query = "SELECT d.cinema_id, d.cinema_name, (JSON_ARRAYAGG(JSON_OBJECT('schedule_id', d.schedule_id, 'schedule_start', TIME_FORMAT(schedule_start, '%H:%i'), 'seat_empty', d.seatempty))) AS cinema_data FROM (SELECT sdl.schedule_id, sdl.schedule_start, cinemas.cinema_id, cinemas.cinema_name, (SELECT COUNT(seats.seat_id) FROM seats seats WHERE seats.room_id = room.room_id AND seats.seat_id NOT IN (SELECT order_details.seat_id FROM order_details WHERE order_details.schedule_id = sdl.schedule_id)) AS seatempty FROM schedule sdl INNER JOIN room room ON sdl.room_id = room.room_id INNER JOIN cinemas cinemas ON cinemas.cinema_id = room.cinema_id WHERE sdl.movie_id = ?1 AND sdl.schedule_date = ?2) AS d GROUP BY d.cinema_id, d.cinema_name")
@Entity
@Table(name = "schedule")
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "schedule_id")
    private int scheduleId;

    @Column(name = "movie_id")
    private int movieId;

    @Column(name = "room_id")
    private int roomId;

    @Column(name = "schedule_date")
    private String scheduleDate;

    @Column(name = "schedule_start")
    private String scheduleStart;

    @Column(name = "schedule_end")
    private String scheduleEnd;

    public Schedule() {
    }

    public Schedule(int movieId, int roomId, String scheduleDate, String scheduleStart, String scheduleEnd) {
        this.movieId = movieId;
        this.roomId = roomId;
        this.scheduleDate = scheduleDate;
        this.scheduleStart = scheduleStart;
        this.scheduleEnd = scheduleEnd;
    }

    public int getScheduleId() {
        return scheduleId;
    }

    public void setScheduleId(int scheduleId) {
        this.scheduleId = scheduleId;
    }

    public int getMovieId() {
        return movieId;
    }

    public void setMovieId(int movieId) {
        this.movieId = movieId;
    }

    public int getRoomId() {
        return roomId;
    }

    public void setRoomId(int roomId) {
        this.roomId = roomId;
    }

    public String getScheduleDate() {
        return scheduleDate;
    }

    public void setScheduleDate(String scheduleDate) {
        this.scheduleDate = scheduleDate;
    }

    public String getScheduleStart() {
        return scheduleStart;
    }

    public void setScheduleStart(String scheduleStart) {
        this.scheduleStart = scheduleStart;
    }

    public String getScheduleEnd() {
        return scheduleEnd;
    }

    public void setScheduleEnd(String scheduleEnd) {
        this.scheduleEnd = scheduleEnd;
    }
}
