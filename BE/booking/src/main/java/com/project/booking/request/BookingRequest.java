package com.project.booking.request;

import java.util.List;

import javax.validation.constraints.NotNull;

public class BookingRequest {
	@NotNull(message = "Thiếu id suất chiếu")
	private int scheduleId;
	@NotNull(message = "Thiếu id ghế")
	private List<Integer> seatIds;
	@NotNull(message = "Thiếu giá")
	private Double price;
	@NotNull(message = "Thiếu trạng thái ghế")
	private String seatStatus;

	// Getters and setters

	public int getScheduleId() {
		return scheduleId;
	}

	public void setScheduleId(int scheduleId) {
		this.scheduleId = scheduleId;
	}

	public List<Integer> getSeatIds() {
		return seatIds;
	}

	public void setSeatIds(List<Integer> seatIds) {
		this.seatIds = seatIds;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getSeatStatus() {
		return seatStatus;
	}

	public void setSeatStatus(String seatStatus) {
		this.seatStatus = seatStatus;
	}
}