package com.project.booking.service;

import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Date;
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
import com.project.booking.model.OrderDTO;
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

		double totalPrice = bookRequest.getPrice();

		Order order = new Order();
		order.setUserId(userId);
		order.setOrderDate(LocalDateTime.now());
		order.setTotalPrice(totalPrice);
		order.setMovieId(bookRequest.getMovieId());
		order.setScheduleId(bookRequest.getScheduleId());
		order.setStatus(bookRequest.getStatus());
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

		// Update the status and add points to the user
		updateStatus(authentication, order.getId(), totalPrice);

		return order;
	}

	public ResponseData<Integer> updateStatus(Authentication authentication, Integer book_id, double total) {
		Integer userId = userRepository.findIdByUsername(authentication.getName());
		Double point = userRepository.getPoint(userId);
		userRepository.addPoint(point + (total * 0.0002), userId);
		return new ResponseData(HttpStatus.OK, "book running", bookRepository.updateStatus(userId, book_id));
	}

	// lay danh sach ve
	public List<OrderDTO> getOrdersByUserId(Authentication authentication) {
		Integer userId = userRepository.findIdByUsername(authentication.getName());
		List<Object[]> results = bookRepository.findOrdersByUserId(userId);
		List<OrderDTO> orders = new ArrayList<>();

		for (Object[] result : results) {
			Integer orderId = (Integer) result[0];
			String movieName = (String) result[1];
			String movie_poster = (String) result[2];
			Date scheduleDate = (Date) result[3];
			Time scheduleStart = (Time) result[4];
			String cinemaName = (String) result[5];
			String roomName = (String) result[6];
			String seats = (String) result[7];
			double total_price = (Double) result[8];
			OrderDTO orderDTO = new OrderDTO(orderId, movieName, movie_poster, scheduleDate, scheduleStart, cinemaName,
					roomName, seats, total_price );
			orders.add(orderDTO);
		}

		return orders;
	}

}
