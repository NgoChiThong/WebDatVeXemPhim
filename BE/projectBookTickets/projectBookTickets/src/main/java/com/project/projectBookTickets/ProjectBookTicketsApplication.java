package com.project.projectBookTickets;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public abstract class ProjectBookTicketsApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ProjectBookTicketsApplication.class, args);
	}

}
