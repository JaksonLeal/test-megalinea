package com.back.megalinea.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.back.megalinea.model.Request;
import com.back.megalinea.service.RequestService;

@RestController
@RequestMapping("/api/requests")
@CrossOrigin(origins = "*")
public class RequestController {

	@Autowired
	private RequestService service;

	@GetMapping
	public List<Request> getAll() {
		return service.getAll();
	}

	@GetMapping("/{id}")
	public Request getById(@PathVariable Long id) {
		return service.getById(id);
	}

	@PostMapping
	public Request create(@RequestBody Request request) {
		return service.create(request);
	}

	@PutMapping("/{id}/approve")
	public Request approve(@PathVariable Long id, @RequestParam String comment) {
		return service.approve(id, comment);
	}

	@PutMapping("/{id}/reject")
	public Request reject(@PathVariable Long id, @RequestParam String comment) {
		return service.reject(id, comment);
	}

	@GetMapping("/pending/{approver}")
	public List<Request> getPendingRequests(@PathVariable String approver) {
		return service.getPendingRequestsByApprover(approver);
	}
}
