package com.back.megalinea.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.back.megalinea.model.Request;
import com.back.megalinea.model.RequestStatus;

public interface RequestRepository extends JpaRepository<Request, Long> {
	List<Request> findByApproverAndStatus(String approver, RequestStatus status);
}
