package com.p810.whitewolf.pizza.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.*;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig extends AbstractWebSocketMessageBrokerConfigurer {
    public static final String SECURED_CHAT_HISTORY = "/secured/history";
    public static final String SECURED_CHAT = "/secured/chat";
    public static final String SECURED_CHAT_ROOM = "/secured/room";
    public static final String SECURED_CHAT_SPECIFIC_USER = "/secured/user/queue/specific-user";
    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker(SECURED_CHAT_HISTORY, SECURED_CHAT_SPECIFIC_USER);
        config.setApplicationDestinationPrefixes("/spring-security-mvc-socket");
        config.setUserDestinationPrefix("/secured/user");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint(SECURED_CHAT_ROOM).withSockJS();
        registry.addEndpoint(SECURED_CHAT).withSockJS();
    }
}
