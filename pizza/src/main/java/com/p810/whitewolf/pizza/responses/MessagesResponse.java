package com.p810.whitewolf.pizza.responses;

import com.p810.whitewolf.pizza.model.ChatMessage;
import lombok.Data;

@Data
public class MessagesResponse {
    String message;
    boolean sentByDoctor = true;

    public MessagesResponse(ChatMessage chatMessage) {
        message = chatMessage.getBody();
    }
}
