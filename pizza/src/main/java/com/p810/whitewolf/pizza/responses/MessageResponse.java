package com.p810.whitewolf.pizza.responses;

import com.p810.whitewolf.pizza.model.ChatMessage;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageResponse{
    private String body;
    private boolean sentByDoctor;

    public MessageResponse(ChatMessage message) {
        body = message.getBody();
        sentByDoctor = message.isSentByDoctor();
    }
}
