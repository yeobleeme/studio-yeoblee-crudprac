package com.lec.persistence;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import com.lec.domain.Works;

public interface WorksRepository extends CrudRepository<Works, Long> {
	
	Page<Works> findByTitleContaining(String title, Pageable pageable);
	Page<Works> findByWriterContaining(String writer, Pageable pageable);
	Page<Works> findByContentContaining(String content, Pageable pageable); 

}
