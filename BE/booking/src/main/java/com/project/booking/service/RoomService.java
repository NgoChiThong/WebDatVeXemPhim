package com.project.booking.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.booking.entity.Room;
import com.project.booking.repository.RoomRepository;

@Service
public class RoomService {
	@Autowired
	RoomRepository roomRepository;
	
	public Room addRoom(Room room) {
        return roomRepository.save(room);
    }
	
	public Room updateRoom(int roomId, Room roomDetails) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new RuntimeException("Room not found with id: " + roomId));
        room.setCinemaId(roomDetails.getCinemaId());
        room.setRoomName(roomDetails.getRoomName());
        return roomRepository.save(room);
    }

    public void deleteRoom(int roomId) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new RuntimeException("Room not found with id: " + roomId));
        roomRepository.delete(room);
    }
}
