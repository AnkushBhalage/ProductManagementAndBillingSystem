package com.app.exc_handler;

import java.time.LocalDateTime;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dto.ErrorResponse;

@ControllerAdvice // mandatory cls level annotation , to tell SC that following class will contain
					// global exc handling methods , offers a common ADVICE to controller layer ,
					// regarding exc handling
//After adding this class : Controller classes will contain : req handling logic
//class below will contain : exc handling logic --resulting into separation of concerns(=task)
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		// Goal : send detailed err messages regarding validation failures
		StringBuilder sb = new StringBuilder("Validation err mesgs :");
		ex.getBindingResult().getFieldErrors().forEach(fieldErr -> sb.append(fieldErr.getDefaultMessage() + " "));
		System.out.println(sb);// err mesgs
		ErrorResponse resp = new ErrorResponse(sb.toString());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(resp);

	}

	// add new exc handler method to catch specifically : custom exc :
	// ResourceNotFound
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<?> handleResourceNotFoundException(ResourceNotFoundException e) {
		System.out.println("in handle res not found");
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorResponse(e.getMessage()));

	}

	// for all other exceptions : add common exc handling method. equivalent to
	// catch-all
	@ExceptionHandler(RuntimeException.class)
	public ResponseEntity<?> handleRuntimeException(RuntimeException e) {
		System.out.println("in handle run time exc " + e);
		// send error response (DTO) wrapped in ResponseEntity
		ErrorResponse resp = new ErrorResponse("Something went wrong : " + e.getMessage());
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(resp);
	}

}
