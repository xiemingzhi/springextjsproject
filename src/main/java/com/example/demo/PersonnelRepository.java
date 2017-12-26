package com.example.demo;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonnelRepository extends PagingAndSortingRepository<Personnel, Long> {
	List<Personnel> findByName(@Param("name") String name);
}
