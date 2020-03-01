package com.p810.whitewolf.pizza.responses;

import com.p810.whitewolf.pizza.config.NiceIdGenerator;
import com.p810.whitewolf.pizza.model.Chat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChatResponse{
    private String chatId;
    private List<MessageResponse> messages;

    public ChatResponse(Chat chat){
        chatId = NiceIdGenerator.toNice(chat.getChatId());
        messages = chat.getMessages().stream()
                .map(MessageResponse::new)
                .collect(Collectors.toList());
    }
}
