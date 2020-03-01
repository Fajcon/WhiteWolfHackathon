package com.p810.whitewolf.pizza.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ChatMessage {
    String from;
    String to;
    String time;
    String body;
}
