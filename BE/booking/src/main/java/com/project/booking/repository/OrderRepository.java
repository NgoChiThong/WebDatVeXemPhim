package com.project.booking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.booking.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Integer> {
}
