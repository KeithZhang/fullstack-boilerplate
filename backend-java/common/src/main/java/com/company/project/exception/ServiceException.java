package com.company.project.exception;

/**
 * 业务异常类
 */
public class ServiceException extends RuntimeException {
    private String errorCode;

    private ServiceException(String errorCode, String message) {
        super(message == null ? errorCode : message);
        this.errorCode = errorCode;
    }

    public String getErrorCode() {
        return this.errorCode;
    }

    @Override
    public synchronized Throwable fillInStackTrace() {
        return null;
    }
}
