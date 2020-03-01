package com.p810.whitewolf.pizza.controller;

import com.p810.whitewolf.pizza.config.NiceIdGenerator;
import com.p810.whitewolf.pizza.model.Chat;
import com.p810.whitewolf.pizza.repositories.ChatRepository;
import com.p810.whitewolf.pizza.repositories.DoctorRepository;
import com.p810.whitewolf.pizza.repositories.MessageRepository;
import com.p810.whitewolf.pizza.responses.AllChatsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatController {
    private DoctorRepository doctorRepository;
    private ChatRepository chatRepository;
    private MessageRepository messageRepository;

    @Autowired
    public ChatController(DoctorRepository doctorRepository, ChatRepository chatRepository, MessageRepository messageRepository) {
        this.doctorRepository = doctorRepository;
        this.chatRepository = chatRepository;
        this.messageRepository = messageRepository;
    }

    @GetMapping("/allMessages/{doctorId}")
    AllChatsResponse allMessages(@PathVariable(name = "doctorId") String doctorId){
        return new AllChatsResponse(doctorRepository.findById(NiceIdGenerator.toLong(doctorId))
                .orElseThrow());
    }

    @GetMapping("/chat/new")
    Chat newChat() {
        return chatRepository.save(new Chat());
    }
}
