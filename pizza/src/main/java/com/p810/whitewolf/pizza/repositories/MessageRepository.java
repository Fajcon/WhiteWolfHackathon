package com.p810.whitewolf.pizza.repositories;

import com.p810.whitewolf.pizza.model.Chat;
import com.p810.whitewolf.pizza.model.ChatMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends JpaRepository<ChatMessage, Long> {
}
