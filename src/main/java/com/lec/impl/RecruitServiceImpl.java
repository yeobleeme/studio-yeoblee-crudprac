package com.lec.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lec.domain.Recruit;
import com.lec.domain.Works;
import com.lec.persistence.RecruitRepository;
import com.lec.service.RecruitService;

@Service
public class RecruitServiceImpl implements RecruitService {
	
	@Autowired
	private RecruitRepository recruitRepository;

	@Override
	public long getTotalRowCount(Recruit recruit) {
		return recruitRepository.count();
	}

	@Override
	public Recruit getRecruit(Recruit recruit) {
		Optional<Recruit> findRecruit = recruitRepository.findById(recruit.getJob());
		System.out.println(findRecruit);
		if(findRecruit.isPresent()) return findRecruit.get();
		else return null;
	}
	
	@Override
	public List<Recruit> getRecruitList() {
		return (List<Recruit>) recruitRepository.findAll();
	}

	@Override
	public void insertRecruit(Recruit recruit) {
		recruitRepository.save(recruit);
	}

	@Override
	public void updateRecruit(Recruit recruit) {
		recruitRepository.save(recruit);
	}

	@Override
	public void deleteRecruit(Recruit recruit) {
		recruitRepository.deleteById(recruit.getJob());
	}

}








