import React, { useEffect, useRef } from 'react';
import 'air-datepicker/air-datepicker.css';
import AirDatepicker from 'air-datepicker';
import PropTypes from 'prop-types';

export default function AirDatepickerField({ id, value, onChange, placeholder = 'Выбрать дату', type, className }) {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            new AirDatepicker(inputRef.current, {
                onSelect({ formattedDate }) {
                    onChange(formattedDate); // Вызываем функцию onChange при выборе даты
                },
                dateFormat: 'dd.MM.yyyy', // Формат даты
            });
        }
    }, []);

    return (
        <input
            id={id}
            ref={inputRef}
            type={type}
            defaultValue={value}
            placeholder={placeholder}
            className={className}
        />
    );
}

AirDatepickerField.propTypes = {
    id: PropTypes.string.isRequired, // Уникальный ID для элемента
    name: PropTypes.string.isRequired, // Имя поля
    value: PropTypes.string, // Значение поля
    placeholder: PropTypes.string, // Плейсхолдер
    onChange: PropTypes.func, // Обработчик изменения
    disabled: PropTypes.bool, // Опционально: доступность поля
    type: PropTypes.string, // Опционально: тип поля
    className: PropTypes.string, // Опционально: класс для стилизации
};