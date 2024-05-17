package com.project.booking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.booking.entity.Seat;
import com.project.booking.model.ResponseSeat;
import com.project.booking.model.ResponseSeatEmpty;

import java.util.List;

@Repository
public interface SeatRepository extends JpaRepository<Seat, Integer> {
    //lấy ghế trống theo id film và id schedule
    @Query(name = "getSeatEmpty", nativeQuery = true)
    List<ResponseSeat> getSeatEmptyBySchedule(Integer schedule_id);
}
