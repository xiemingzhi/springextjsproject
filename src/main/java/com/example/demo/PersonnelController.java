package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:1841")
@RestController
@RequestMapping("/personnel")
public class PersonnelController {

	@Autowired
	PersonnelRepository repository;
	
	@RequestMapping(method = RequestMethod.GET)
    public List<Personnel> retrievePersonnelList() {
		List<Personnel> personnelList = new ArrayList<>();
		for (Personnel personnel : repository.findAll()) {
			personnelList.add(personnel);
		}
        return personnelList;
    }
	
	@RequestMapping(method=RequestMethod.POST)
    public Personnel createPersonnel(@RequestBody Personnel personnelNew) {
		Personnel savedPersonnel = repository.save(personnelNew);
		System.out.println("savedpersonnel = " + savedPersonnel.getId());
        return savedPersonnel;
    }
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/{personnelId}")
	public Boolean deletePersonnel(@PathVariable(value="personnelId") Long personnelId) {
		repository.delete(personnelId);
		System.out.println("deletepersonnel " + personnelId);
		return !repository.exists(personnelId);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value = "/{personnelId}")
    public Personnel updatePersonnel(@PathVariable(value="personnelId") Long personnelId, @RequestBody Personnel personnelNew) {
		Personnel oldPersonnel = repository.findOne(personnelId);
		if (null != personnelNew.getName()) oldPersonnel.setName(personnelNew.getName());
		if (null != personnelNew.getEmail()) oldPersonnel.setEmail(personnelNew.getEmail());
		if (null != personnelNew.getPhone()) oldPersonnel.setPhone(personnelNew.getPhone());
		Personnel savedPersonnel = repository.save(oldPersonnel);
		System.out.println("updatedpersonnel = " + savedPersonnel.getId());
        return savedPersonnel;
    }

}
