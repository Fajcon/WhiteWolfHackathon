package com.p810.whitewolf.pizza.repositories;

import com.p810.whitewolf.pizza.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
}
