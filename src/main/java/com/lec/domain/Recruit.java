package com.lec.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
public class Recruit {
	
	@Id
	private String job;
	
	private String nor;
	
	private String dsc;
	
	private String qlf;
	
	private String loc;
	
	private String prc;
	
	private String hta;
	
	private String ddl;
	
	

}





