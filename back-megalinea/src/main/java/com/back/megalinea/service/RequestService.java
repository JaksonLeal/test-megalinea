package com.back.megalinea.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.back.megalinea.model.Request;
import com.back.megalinea.repository.RequestRepository;

@Service
public class RequestService {

	@Autowired
	private RequestRepository repository;

	public List<Request> getAll() {
		return repository.findAll();
	}

	public Request getById(Long id) {
		return repository.findById(id).orElseThrow( //si no es exitosa la consulta lanza una excepcion
						() -> new RuntimeException("Request not found"));
	}

	public Request create(Request request) {
		request.setStatus(Request.RequestStatus.PENDING);
		request.setCreatedAt(LocalDateTime.now());
		request.setUpdatedAt(LocalDateTime.now());
		return repository.save(request);
	}

	public Request approve(Long id, String comment) {
		Request req = getById(id);
		req.setStatus(Request.RequestStatus.APPROVED);
		req.setComment(comment);
		req.setUpdatedAt(LocalDateTime.now());
		return repository.save(req);
	}

	public Request reject(Long id, String comment) {
		Request req = getById(id);
		req.setStatus(Request.RequestStatus.REJECTED);
		req.setComment(comment);
		req.setUpdatedAt(LocalDateTime.now());
		return repository.save(req);
	}

	public List<Request> getPendingRequests(String approver) {
		return repository.findByApproverAndStatus(approver, Request.RequestStatus.PENDING);
	}
}
