package com.project.booking.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "order_details")
public class OrderDetail {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name = "order_id", nullable = false)
	private Order order;

	@Column(nullable = false)
	private int scheduleId;

	@Column(nullable = false)
	private int seatId;

	@Column(nullable = false)
	private Double price;

	@Column(nullable = false)
	private int seatStatus;

	public OrderDetail(int id, Order order, int scheduleId, int seatId, Double price, int seatStatus) {
		super();
		this.id = id;
		this.order = order;
		this.scheduleId = scheduleId;
		this.seatId = seatId;
		this.price = price;
		this.seatStatus = seatStatus;
	}

	public OrderDetail() {
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public int getScheduleId() {
		return scheduleId;
	}

	public void setScheduleId(int scheduleId) {
		this.scheduleId = scheduleId;
	}

	public int getSeatId() {
		return seatId;
	}

	public void setSeatId(int seatId) {
		this.seatId = seatId;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public int getSeatStatus() {
		return seatStatus;
	}

	public void setSeatStatus(int i) {
		this.seatStatus = i;
	}

}