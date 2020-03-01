package com.p810.whitewolf.pizza.controller;

import com.p810.whitewolf.pizza.model.Chat;
import com.p810.whitewolf.pizza.model.ChatMessage;
import com.p810.whitewolf.pizza.repositories.ChatRepository;
import com.p810.whitewolf.pizza.repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class ChatController {
    private ChatRepository chatRepository;
    private MessageRepository messageRepository;

    @Autowired
    public ChatController(ChatRepository chatRepository, MessageRepository messageRepository) {
        this.chatRepository = chatRepository;
        this.messageRepository = messageRepository;
    }

    @GetMapping("/messages/{chatId}")
    List<ChatMessage> allMessages(@PathVariable(name = "chatId") String chatId){
        return chatRepository.findById(chatId)
                .orElseThrow()
                .getMessages()
                .stream()
                .sorted(Comparator.comparing(ChatMessage::getTimestamp))
                .collect(Collectors.toList());
    }

    @GetMapping("/chat/new")
    Chat newChat() {
        return chatRepository.save(new Chat());
    }
}
