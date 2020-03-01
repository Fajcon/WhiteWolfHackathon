package com.p810.whitewolf.pizza.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Chat {
    @Id @GeneratedValue
    private Long chatId;
    @ManyToOne
    private Doctor doctor;
    @OneToMany(mappedBy = "chat", cascade = CascadeType.ALL)
    private List<ChatMessage> messages;

    public Chat(Doctor doctor) {
        this.doctor = doctor;
    }
}
