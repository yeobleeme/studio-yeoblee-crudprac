package com.lec.persistence;

import org.springframework.data.repository.CrudRepository;

import com.lec.domain.Recruit;

public interface RecruitRepository extends CrudRepository<Recruit, String> {

}
