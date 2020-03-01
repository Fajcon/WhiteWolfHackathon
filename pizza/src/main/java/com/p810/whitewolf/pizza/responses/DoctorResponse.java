package com.p810.whitewolf.pizza.responses;

import com.p810.whitewolf.pizza.model.Doctor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class DoctorResponse {
    private Long id;
    private String title;
    private String subtitle;
    private String image;
    private String content;

    public DoctorResponse(Doctor doctor){
        id = doctor.getId();
        title = doctor.getTitle();
        subtitle = doctor.getSubtitle();
        image = doctor.getImage();
        content = doctor.getContent();
    }
}
