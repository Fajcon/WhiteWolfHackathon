package com.p810.whitewolf.pizza.responses;

import com.p810.whitewolf.pizza.model.ChatMessage;
import lombok.Data;

@Data
public class MessagesResponse {
    String body;
    boolean sentByDoctor;

    public MessagesResponse(ChatMessage chatMessage) {
        body = chatMessage.getBody(); sentByDoctor = chatMessage.isSentByDoctor();
    }
}
