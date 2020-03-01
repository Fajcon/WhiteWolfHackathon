package com.p810.whitewolf.pizza.controller;

import com.p810.whitewolf.pizza.config.NiceIdGenerator;
import com.p810.whitewolf.pizza.model.Chat;
import com.p810.whitewolf.pizza.repositories.ChatRepository;
import com.p810.whitewolf.pizza.repositories.DoctorRepository;
import com.p810.whitewolf.pizza.repositories.MessageRepository;
import com.p810.whitewolf.pizza.responses.AllChatsResponse;
import com.p810.whitewolf.pizza.responses.MessagesResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin("*")
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

    @GetMapping("/zwierzatkadolonga/{niceId}")
    Long niceToLong(@PathVariable(name = "niceId") String niceId){
        return NiceIdGenerator.toLong(niceId);
    }

    @GetMapping("/allMessages/{doctorId}")
    AllChatsResponse allMessages(@PathVariable(name = "doctorId") Long doctorId){
        return new AllChatsResponse(doctorRepository.findById(doctorId)
                .orElseThrow());
    }

    @GetMapping("/chatMessages/{chatId}")
    List<MessagesResponse> messegesForChat(@PathVariable(name = "chatId") String chatId){
        return chatRepository.findById(chatId)
                .orElseThrow()
                .getMessages()
                .stream()
                .sorted(Comparator.comparing(ChatMessage::getTimestamp))
                .map(MessagesResponse::new)
                .collect(Collectors.toList());
    }

    @GetMapping("/chat/new")
    Long newChat() {
        return chatRepository.save(new Chat()).getChatId();
    }
}
