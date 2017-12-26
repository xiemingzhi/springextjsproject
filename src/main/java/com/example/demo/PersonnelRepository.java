package com.example.demo;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
//import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

//@CrossOrigin(origins = "http://localhost:1841")
//@RepositoryRestResource(collectionResourceRel = "personnel", path = "personnel")
@Repository
public interface PersonnelRepository extends PagingAndSortingRepository<Personnel, Long> {
	List<Personnel> findByName(@Param("name") String name);
}
