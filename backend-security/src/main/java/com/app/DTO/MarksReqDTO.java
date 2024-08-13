package com.app.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class MarksReqDTO {

	private Long courseId;
	private Long subjectId;
	private Long studentId;
	private int marks;

}
