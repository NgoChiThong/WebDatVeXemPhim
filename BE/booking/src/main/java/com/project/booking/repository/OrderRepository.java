package com.project.booking.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.booking.entity.Order;
import com.project.booking.model.OrderDTO;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {

}