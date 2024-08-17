package com.example.entity;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.util.function.Consumer;

/**
 * 对象转换小工具
 */
public interface BaseData {

    default <V> V asViewObject(Class<V> clazz, Consumer<V> consumer) {
        V v = this.asViewObject(clazz);
        consumer.accept(v);
        return v;
    }

    default <V> V asViewObject(Class<V> clazz) {
        try {
            Field[] declaredFields = clazz.getDeclaredFields();
            Constructor<V> constructor = clazz.getDeclaredConstructor();
            V v = constructor.newInstance();
            for (Field declaredField : declaredFields) convert(declaredField, v);
            return v;
        } catch (ReflectiveOperationException e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    private void convert(Field field, Object vo) {
        try {
            Field source = this.getClass().getDeclaredField(field.getName());
            field.setAccessible(true);
            source.setAccessible(true);
            field.set(vo, source.get(this));
        } catch (IllegalAccessException | NoSuchFieldException ignored) {
        }
    }
}
