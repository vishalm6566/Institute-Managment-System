package com.app.custom_exceptions;

public class InvalidCredentialsException extends ApiException {

	public InvalidCredentialsException(String mesg) {
		super(mesg);
	}

}
