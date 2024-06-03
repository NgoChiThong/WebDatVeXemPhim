package com.project.booking.model;

import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

public class OrderDTO {
	private Integer orderId;
	private String movieName;
	private String moviePoster;
	private Date scheduleDate;
	private Time scheduleStart;
	private String cinemaName;
	private String roomName;
	private String seats;
	public OrderDTO(Integer orderId, String movieName, String moviePoster, Date scheduleDate, Time scheduleStart,
			String cinemaName, String roomName, String seats) {
		super();
		this.orderId = orderId;
		this.movieName = movieName;
		this.moviePoster = moviePoster;
		this.scheduleDate = scheduleDate;
		this.scheduleStart = scheduleStart;
		this.cinemaName = cinemaName;
		this.roomName = roomName;
		this.seats = seats;
	}
	public Integer getOrderId() {
		return orderId;
	}
	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}
	public String getMovieName() {
		return movieName;
	}
	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}
	public String getMoviePoster() {
		return moviePoster;
	}
	public void setMoviePoster(String moviePoster) {
		this.moviePoster = moviePoster;
	}
	public Date getScheduleDate() {
		return scheduleDate;
	}
	public void setScheduleDate(Date scheduleDate) {
		this.scheduleDate = scheduleDate;
	}
	public Time getScheduleStart() {
		return scheduleStart;
	}
	public void setScheduleStart(Time scheduleStart) {
		this.scheduleStart = scheduleStart;
	}
	public String getCinemaName() {
		return cinemaName;
	}
	public void setCinemaName(String cinemaName) {
		this.cinemaName = cinemaName;
	}
	public String getRoomName() {
		return roomName;
	}
	public void setRoomName(String roomName) {
		this.roomName = roomName;
	}
	public String getSeats() {
		return seats;
	}
	public void setSeats(String seats) {
		this.seats = seats;
	}
	

}