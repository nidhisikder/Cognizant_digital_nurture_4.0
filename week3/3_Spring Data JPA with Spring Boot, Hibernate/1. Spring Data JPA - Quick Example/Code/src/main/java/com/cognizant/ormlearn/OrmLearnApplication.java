package com.cognizant.ormlearn;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;

import java.util.List;

@SpringBootApplication
public class OrmLearnApplication implements CommandLineRunner {

    @Autowired
    private CountryService countryService;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
        System.out.println("Inside main");
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Start");

        List<Country> countries = countryService.getAllCountries();
        System.out.println("countries = " + countries); // ✅ Add this line

        System.out.println("End");
    }
}
