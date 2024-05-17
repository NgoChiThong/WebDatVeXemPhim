package com.project.booking.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.project.booking.entity.Book;
import com.project.booking.model.ResponseData;
import com.project.booking.repository.BookRepository;
import com.project.booking.repository.UserRepository;
import com.project.booking.request.BookRequest;

@Service
public class BookService {

    @Autowired
    BookRepository bookRepository;

    @Autowired
    UserRepository userRepository;

    public ResponseData<Book> bookTicket(Authentication authentication, BookRequest bookRequest){
        Integer userId = userRepository.findIdByUsername(authentication.getName());
        if(bookRequest == null){
            return new ResponseData(HttpStatus.FOUND, "book ticket fail", null);
        }else{
            return new ResponseData(HttpStatus.OK, "success", bookRepository.bookTicket(userId, bookRequest.getScheduleId(), bookRequest.getSeatId(), bookRequest.getPrice(), bookRequest.getSeatStatus()));
        }
    }

    public ResponseData<Integer> updateStatus(Authentication authentication, Integer book_id){
            Integer userId = userRepository.findIdByUsername(authentication.getName());
            Double point = userRepository.getPoint(userId);
            userRepository.addPoint(point+10, userId);
            return new ResponseData(HttpStatus.OK, "book running", bookRepository.updateStatus(userId, book_id));
    }

}
