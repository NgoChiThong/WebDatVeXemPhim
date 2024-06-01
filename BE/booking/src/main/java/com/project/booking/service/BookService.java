package com.project.booking.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.project.booking.entity.Book;
import com.project.booking.entity.Order;
import com.project.booking.entity.OrderDetail;
import com.project.booking.model.ResponseData;
import com.project.booking.repository.BookRepository;
import com.project.booking.repository.OrderDetailRepository;
import com.project.booking.repository.OrderRepository;
import com.project.booking.repository.UserRepository;
import com.project.booking.request.BookingRequest;

@Service
public class BookService {

	@Autowired
	BookRepository bookRepository;

	@Autowired
	UserRepository userRepository;

	@Autowired
	private OrderRepository orderRepository;

	@Autowired
	private OrderDetailRepository orderDetailRepository;

//    public ResponseData<Book> bookTicket(Authentication authentication, BookRequest bookRequest){
//        Integer userId = userRepository.findIdByUsername(authentication.getName());
//        if(bookRequest == null){
//            return new ResponseData(HttpStatus.FOUND, "book ticket fail", null);
//        }else{
//            return new ResponseData(HttpStatus.OK, "success", bookRepository.bookTicket(userId, bookRequest.getScheduleId(), bookRequest.getSeatId(), bookRequest.getPrice(), bookRequest.getSeatStatus()));
//        }
//    }

	@Transactional
	public Order bookTicket(Authentication authentication, BookingRequest bookRequest) {
		int userId = userRepository.findIdByUsername(authentication.getName());

		double totalPrice = bookRequest.getPrice() * bookRequest.getSeatIds().size();

		Order order = new Order();
		order.setUserId(userId);
		order.setOrderDate(LocalDateTime.now());
		order.setTotalPrice(totalPrice);
		order = orderRepository.save(order);

		Order finalOrder = order; // Dùng holder object để lưu trữ giá trị của order
		List<OrderDetail> orderDetails = bookRequest.getSeatIds().stream().map(seatId -> {
			OrderDetail detail = new OrderDetail();
			detail.setOrder(finalOrder);
			detail.setScheduleId(bookRequest.getScheduleId());
			detail.setSeatId(seatId);
			detail.setPrice(bookRequest.getPrice());
			detail.setSeatStatus(bookRequest.getSeatStatus());
			return detail;
		}).collect(Collectors.toList());

		orderDetailRepository.saveAll(orderDetails);

		return order;
	}

	public ResponseData<Integer> updateStatus(Authentication authentication, Integer book_id) {
		Integer userId = userRepository.findIdByUsername(authentication.getName());
		Double point = userRepository.getPoint(userId);
		userRepository.addPoint(point + 10, userId);
		return new ResponseData(HttpStatus.OK, "book running", bookRepository.updateStatus(userId, book_id));
	}

}
