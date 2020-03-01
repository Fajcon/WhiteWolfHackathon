package com.p810.whitewolf.pizza.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Doctor {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String subtitle;
    private String image;
    private String content;
    @OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL)
    private List<Chat> chats;
}
