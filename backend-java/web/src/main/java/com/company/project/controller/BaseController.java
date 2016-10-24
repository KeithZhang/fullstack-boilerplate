package com.company.project.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

/**
 * Created by keith on 10/11/16.
 */
public class BaseController {

    @Autowired
    private MessageSource messageSource;


    /**
     * 获取国际化配置信息
     *
     * @param code 国际化编码
     * @return
     */
    protected String getMessage(String code) {
        // 默认只用中文一种,如果有需要别的语言可以改
        return messageSource.getMessage(code, null, "错误信息不明", Locale.CHINA);
    }

    /**
     * 返回默认的成功json数据
     *
     * @return
     */
    protected Map<String, Object> success() {
        Map<String, Object> result = new HashMap<>();
        result.put("result", "ok");
        result.put("data", "");
        result.put("msg", getMessage("200"));
        return result;
    }

    /**
     * 返回成功json数据
     *
     * @param data 返回的数据
     * @param code 国际化编码
     * @return
     */
    protected Map<String, Object> success(Object data, String code) {
        Map<String, Object> result = new HashMap<>();
        result.put("result", "ok");
        result.put("data", data);
        result.put("msg", getMessage(code));
        return result;
    }

    /**
     * 返回成功json数据
     *
     * @param code 国际化编码
     * @return
     */
    protected Map<String, Object> failure(String code) {
        Map<String, Object> map = new HashMap<>();
        map.put("result", "fail");
        map.put("data", "");
        map.put("msg", getMessage(code));
        return map;
    }

    /**
     * 返回成功json数据
     *
     * @param data 返回的数据
     * @param code 国际化编码
     * @return
     */
    protected Map<String, Object> failure(Object data, String code) {
        Map<String, Object> result = new HashMap<>();
        result.put("result", "fail");
        result.put("data", data);
        result.put("msg", getMessage(code));
        return result;
    }
}
