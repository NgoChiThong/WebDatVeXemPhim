package com.project.booking.controllerAdmin;

import io.swagger.annotations.Api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.booking.entity.Room;
import com.project.booking.service.RoomService;

@RestController
@Api(description = "Api room")
@RequestMapping("/admin/room")
public class RoomControllerAd {
	@Autowired
	RoomService roomService;

	@PostMapping("/add")
	public ResponseEntity<Room> addRoom(@RequestBody Room room) {
		Room addedRoom = roomService.addRoom(room);
		return new ResponseEntity<>(addedRoom, HttpStatus.CREATED);
	}

	@PutMapping("/update/{id}")
    public ResponseEntity<Room> updateRoom(@PathVariable("id") int roomId, @RequestBody Room roomDetails) {
        Room updatedRoom = roomService.updateRoom(roomId, roomDetails);
        return new ResponseEntity<>(updatedRoom, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteRoom(@PathVariable("id") int roomId) {
        roomService.deleteRoom(roomId);
        return ResponseEntity.ok("Room deleted successfully");
    }
}