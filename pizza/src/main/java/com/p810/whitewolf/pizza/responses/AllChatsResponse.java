package com.p810.whitewolf.pizza.responses;

import com.p810.whitewolf.pizza.model.Chat;
import com.p810.whitewolf.pizza.model.ChatMessage;
import com.p810.whitewolf.pizza.model.Doctor;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AllChatsResponse {
    List<ChatResponse> chats;

    public AllChatsResponse (Doctor doctor) {
        chats = doctor.getChats().stream().map(ChatResponse::new).collect(Collectors.toList());
    }


}
