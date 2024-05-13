package com.project.projectBookTickets.service;

import com.project.projectBookTickets.entity.Book;
import com.project.projectBookTickets.model.ResponseData;
import com.project.projectBookTickets.repository.BookRepository;
import com.project.projectBookTickets.repository.UserRepository;
import com.project.projectBookTickets.request.BookRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

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
