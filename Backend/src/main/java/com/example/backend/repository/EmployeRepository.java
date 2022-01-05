package com.example.backend.repository;

import com.example.backend.entity.Employe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EmployeRepository extends JpaRepository<Employe,Long> {

}

