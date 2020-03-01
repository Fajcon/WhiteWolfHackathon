package com.p810.whitewolf.pizza.controller;

import com.p810.whitewolf.pizza.model.ChatMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.Message;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.stereotype.Controller;

import java.security.Principal;
import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
public class ChatController {
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;
    private static final Logger log = LoggerFactory.getLogger(ChatController.class);

    @MessageMapping("secured/chat")
    @SendTo("secured/history")
    public ChatMessage sendAll(ChatMessage message) throws Exception {
        ChatMessage out = new ChatMessage(message.getFrom(), message.getTo(), message.getTime(), message.getBody());
        return out;
    }


    @MessageMapping("secured/room")
    public void sendSpecific(@Payload ChatMessage message) throws Exception {
        ChatMessage out = new ChatMessage(message.getFrom(), message.getTo(), message.getTime(), message.getBody());
        simpMessagingTemplate.convertAndSendToUser(message.getTo(), "/secured/user/queue/specific-user", out);
    }
}
