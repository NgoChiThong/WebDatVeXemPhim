package com.project.projectBookTickets.repository;

import com.project.projectBookTickets.entity.Seat;
import com.project.projectBookTickets.model.ResponseSeat;
import com.project.projectBookTickets.model.ResponseSeatEmpty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SeatRepository extends JpaRepository<Seat, Integer> {
    //lấy ghế trống theo id film và id schedule
    @Query(name = "getSeatEmpty", nativeQuery = true)
    List<ResponseSeat> getSeatEmptyBySchedule(Integer schedule_id);
}