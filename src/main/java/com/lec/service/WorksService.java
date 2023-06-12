package com.lec.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.lec.domain.Works;

public interface WorksService {
	
	long getTotalRowCount(Works works);
	Works getWorks(Works works);
	Page<Works> getWorksList(Pageable pageable, String searchType, String searchWord);
	List<Works> getWorksList();
	void insertWorks(Works works);
	void updateWorks(Works works);
	void deleteWorks(Works works);
	int updateReadCount(Works works);

}
