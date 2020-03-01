package com.p810.whitewolf.pizza.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChatMessage {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long messageId;
    @ManyToOne
    private Chat chat;
    private String body;
    private Timestamp timestamp;
    private boolean sentByDoctor;

    public ChatMessage(Chat chat, String message, Timestamp timestamp, Boolean sentByDoctor) {
        this.chat = chat;
        this.body = message;
        this.timestamp = timestamp;
        this.sentByDoctor = sentByDoctor;
    }
}
