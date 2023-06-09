package com.lec.persistence;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.lec.domain.Works;

public interface WorksRepository extends CrudRepository<Works, Long> {
	
	@Modifying
	@Transactional
	@Query("update Works w set w.cnt = w.cnt + 1 where w.seq = :seq")
	int updateReadCount(@Param("seq") Long seq);
	
	@Modifying
	@Transactional
	@Query("update Works w set w.works_ref = w.seq, w.works_lev =:lev, w.works_seq = :_seq where w.seq = :seq")

	void updateLastSeq(@Param("lev") Long i, @Param("_seq") Long j, @Param("seq") Long seq);
	
	Page<Works> findByTitleContaining(String title, Pageable pageable);
	Page<Works> findByWriterContaining(String writer, Pageable pageable);
	Page<Works> findByContentContaining(String content, Pageable pageable); 

}







