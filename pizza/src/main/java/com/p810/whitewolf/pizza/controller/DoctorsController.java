package com.p810.whitewolf.pizza.controller;

import com.p810.whitewolf.pizza.repositories.DoctorRepository;
import com.p810.whitewolf.pizza.responses.DoctorResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class DoctorsController {
    DoctorRepository doctorRepository;

    @GetMapping("/allDoctors")
    public List<DoctorResponse> allDoctors(){
        return doctorRepository.findAll()
                .stream()
                .map(DoctorResponse::new)
                .collect(Collectors.toList());
    }
}
