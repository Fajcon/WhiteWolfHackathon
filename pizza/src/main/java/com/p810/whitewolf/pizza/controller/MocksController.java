package com.p810.whitewolf.pizza.controller;

import com.p810.whitewolf.pizza.model.Doctor;
import com.p810.whitewolf.pizza.repositories.DoctorRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MocksController {
    private DoctorRepository doctorRepository;

    public MocksController(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    @GetMapping("makeMocks")
    public void makeMocks(){
        doctorRepository.save(new Doctor("lek. Piotr Gdziebył", "psychiatra", "https://ocdn.eu/pulscms-transforms/1/ro8k9kuTURBXy9kOTYzYjViNS1iOTJlLTQ1MWItYmZjZi01MzQ5YzYxNzBjYjguanBlZ5GVAs0DBwDDw4GhMAE", "H"));
        doctorRepository.save(new Doctor("dr n. med. Jan Nowak", "psychiatra, psychoterapeuta", "https://www.dts24.pl/wp-content/uploads/2017/01/Doktor-Malinowski-maly.jpg", "He"));
        doctorRepository.save(new Doctor("lek. Zbigniew Tambył", "psychiatra, seksuolog", "https://gww.pl/media/cache/60/66/60660f6802da568173454291c12f9ace.jpg", "Li"));
        doctorRepository.save(new Doctor("lek. Agnieszka Zając", "psychiatra, psychoterapeuta", "https://www.mojegotowanie.pl/media/cache/default_view/uploads/media/default/0001/91/anna-makowska-doktor-ania.jpeg", "Be"));
        doctorRepository.save(new Doctor("dr n. med. Marta Szczeblo", "psychiatra", "https://ocdn.eu/pulscms-transforms/1/UApktkpTURBXy8zZTFlNTZiMDllMDNlNmM4NTIxZjcxMzI3OTYxYTZlYi5qcGeRkwIAzQHk", "B"));
        doctorRepository.save(new Doctor("lek. Agnieszka Sarniak", "ppsychiatra, seksuolog", "https://ocdn.eu/pulscms-transforms/1/JC1ktkpTURBXy9lNDAzYzVmMTIzZjJkYTBjNTk3ZDcxMWI0NGE0OTZjNy5qcGeSlQLNA8AAwsOVAgDNA8DCww", "C"));
        doctorRepository.save(new Doctor("dr n. med. Jan Kowalski", "psychiatra, seksuolog, internista", "https://s10.tvp.pl/images2/0/1/d/uid_01d19bfcca26c59539f53086253387601476370264594_width_636_play_0_pos_0_gs_0_height_356.jpg", "N"));
        doctorRepository.save(new Doctor("lek. Agnieszka Gdziebyla", "psychiatra, seksuolog", "https://i.iplsc.com/doktor-hanna-sikorka-marta-zmuda-trzebiatowska/0007GZF2FEO9AOM0-C122-F4.jpg", "O"));
        doctorRepository.save(new Doctor("lek. Piotr Miechlło", "psychiatra", "https://i.iplsc.com/piotr-garlicki/0004HWQ0X8D5KFIA-C122-F4.jpg", "F"));
        doctorRepository.save(new Doctor("lek. Zbigniew Nowak", "psychiatra, psychoterapeuta", "https://ocdn.eu/pulscms-transforms/1/ro8k9kuTURBXy9kOTYzYjViNS1iOTJlLTQ1MWItYmZjZi01MzQ5YzYxNzBjYjguanBlZ5GVAs0DBwDDw4GhMAE", "Ne"));

    }
    }
