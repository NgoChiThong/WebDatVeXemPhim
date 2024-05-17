package com.project.booking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.booking.entity.Room;

@Repository
public interface RoomRepository extends JpaRepository<Room, Integer> {

}
