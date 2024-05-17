package com.project.booking.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.project.booking.model.ResponseData;
import com.project.booking.model.ResponseScheduleCinema;
import com.project.booking.repository.CinemaRepository;
import com.project.booking.repository.ScheduleRepository;

import java.util.List;

@Service
public class ScheduleService {
    @Autowired
    ScheduleRepository scheduleRepository;

    @Autowired
    CinemaRepository cinemaRepository;

    public ResponseData<ResponseScheduleCinema> getScheduleCinema(Integer movie_id, String schedule_date){
        List<ResponseScheduleCinema> rs = scheduleRepository.getSchedule(movie_id, schedule_date);
        if(CollectionUtils.isEmpty(rs)){
            return new ResponseData(HttpStatus.NOT_FOUND,"not found schedule", null);
        }else{
            return new ResponseData(HttpStatus.OK,"success", scheduleRepository.getSchedule(movie_id, schedule_date));
        }
    }
}
