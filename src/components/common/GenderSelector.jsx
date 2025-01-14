import React, { useEffect } from 'react';
import InputField from '../common/InputField';
import PropTypes from 'prop-types';
import { useGenderStore } from '../../store';

export default function GenderSelector() {
    const { selectedGender, setGender, initializeGender } = useGenderStore();

    // Инициализируем состояние только один раз при первом рендере
    useEffect(() => {
        initializeGender(selectedGender || ''); // Установите из Zustand или оставьте пустым
    }, [initializeGender]);

    const handleChange = (e) => {
        setGender(e.target.value); // Обновляем состояние через Zustand
    };

    return (
        <div className="form_controls">
            <div className="control">
                <span className="control_title">Ваш пол</span>
                <div className="checkbox">
                    <label htmlFor="male">
                        <InputField
                            id="male"
                            type="radio"
                            name="sex"
                            value="male"
                            onChange={handleChange}
                            checked={selectedGender === 'male'} // Привязка к состоянию из Zustand
                        />
                        <div className="checkbox_cell"></div>
                        <span>Мужской</span>
                    </label>
                    <label htmlFor="fem">
                        <InputField
                            id="fem"
                            type="radio"
                            name="sex"
                            value="fem"
                            onChange={handleChange}
                            checked={selectedGender === 'fem'} // Привязка к состоянию из Zustand
                        />
                        <div className="checkbox_cell"></div>
                        <span>Женский</span>
                    </label>
                </div>
            </div>
        </div>
    );
}


GenderSelector.propTypes = {
    defaultGender: PropTypes.string, // Начальное значение пола
};
