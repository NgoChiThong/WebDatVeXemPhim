package com.project.booking.controllerAdmin;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.project.booking.entity.Schedule;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.booking.entity.Schedule;
import com.project.booking.service.CinemaService;
import com.project.booking.service.ScheduleService;

@RestController
@Api(description = "Api schedule")
@RequestMapping("/admin/schedule")
public class ScheduleControllerAd {
    @Autowired
    ScheduleService scheduleService;
    @Autowired
    CinemaService cinemaService;
//  Thêm lịch chiếu
  @PostMapping("/add")
  public ResponseEntity<Schedule> addSchedule(@RequestBody Schedule schedule) {
      Schedule addedSchedule = scheduleService.addSchedule(schedule);
      return new ResponseEntity<>(addedSchedule, HttpStatus.CREATED);
  }
  
//  Cập nhật lịch chiếu
  @PutMapping("/update/{id}")
  public ResponseEntity<Schedule> updateSchedule(@PathVariable("id") int scheduleId, @RequestBody Schedule scheduleDetails) {
      Schedule updatedSchedule = scheduleService.updateSchedule(scheduleId, scheduleDetails);
      return new ResponseEntity<>(updatedSchedule, HttpStatus.OK);
  }
//  Xóa lịch chiếu
  @DeleteMapping("/delete/{id}")
  public ResponseEntity<?> deleteSchedule(@PathVariable("id") int scheduleId) {
      scheduleService.deleteSchedule(scheduleId);
      return ResponseEntity.ok("Schedule deleted successfully");
  }
}
