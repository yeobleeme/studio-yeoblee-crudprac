package com.lec.domain;

import javax.persistence.PostPersist;
import javax.persistence.PostRemove;
import javax.persistence.PostUpdate;
import javax.persistence.PrePersist;
import javax.persistence.PreRemove;
import javax.persistence.PreUpdate;

public class WorksListeners {
	
//	@PostLoad
//	public void postLoad(Works works) {
//		System.out.println("post load: {}" + works);
//	}
	
	@PrePersist
	public void prePersist(Works works) {
		System.out.println("pre persist: {}" + works);
	}
	
	@PostPersist
	public void postPersist(Works works) {
		System.out.println("post persist: {}" + works);
	}
	
	@PreUpdate
	public void preUpdate(Works works) {
		System.out.println("pre update: {}" + works);
	}
	
	@PostUpdate
	public void postUpdate(Works works) {
		System.out.println("post update: {}" + works);
	}
	
	@PreRemove
	public void preRemove(Works works) {
		System.out.println("pre remove: {}" + works);
	}
	
	@PostRemove
	public void postRemove(Works works) {
		System.out.println("post remove: {}" + works);
	}
	
	
	

}










