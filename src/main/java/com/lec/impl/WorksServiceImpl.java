package com.lec.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.lec.domain.Works;
import com.lec.persistence.WorksRepository;
import com.lec.service.WorksService;

@Service
public class WorksServiceImpl implements WorksService {
	
	@Autowired
	private WorksRepository worksRepository;

	@Override
	public long getTotalRowCount(Works works) {
		return worksRepository.count();
	}

	@Override
	public Works getWorks(Works works) {
		
		Optional<Works> findWorks = worksRepository.findById(works.getSeq());
		if(findWorks.isPresent()) return findWorks.get();
		else return null; 
	}

	@Override
	public Page<Works> getWorksList(Pageable pageable, String searchType, String searchWord) {
		
		if(searchType.equalsIgnoreCase("title")) {
			return worksRepository.findByTitleContaining(searchWord, pageable);
		} else if(searchType.equalsIgnoreCase("writer")) {
			return worksRepository.findByWriterContaining(searchWord, pageable);
		} else {
			return worksRepository.findByContentContaining(searchWord, pageable);
		}
	}

	@Override
	public void insertWorks(Works works) {
		worksRepository.save(works);
		worksRepository.updateLastSeq(0L, 0L, works.getSeq());
	}

	@Override
	public void updateWorks(Works works) {
		
		Works findWorks = worksRepository.findById(works.getSeq()).get();
		findWorks.setTitle(works.getTitle());
		findWorks.setContent(works.getContent());
		worksRepository.save(works);
	}

	@Override
	public void deleteWorks(Works works) {
		worksRepository.deleteById(works.getSeq());
	}

	@Override
	public int updateReadCount(Works works) {
		return worksRepository.updateReadCount(works.getSeq());
	}

	@Override
	public List<Works> getWorksList() {
		return (List<Works>) worksRepository.findAll();
	}

}








