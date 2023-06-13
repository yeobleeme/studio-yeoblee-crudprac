package com.lec.service;

import java.util.List;

import com.lec.domain.Recruit;

public interface RecruitService {
	
	long getTotalRowCount(Recruit recruit);
	Recruit getRecruit(Recruit recruit);
	List<Recruit> getRecruitList();
	void insertRecruit(Recruit recruit);
	void updateRecruit(Recruit recruit);
	void deleteRecruit(Recruit recruit);

}
