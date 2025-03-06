import React, { useState } from 'react';

const AuthForm = () => {
    const [email, setEmail] = useState('test@test.com');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const lang = window.AUTH_FORM_LANG || {};

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError(true);
            return;
        }
        // Тут AJAX запрос к вашему bitrix ajax-контроллеру
        console.log('Auth attempt:', { email, password });
    };

    return (
        <div className="page page-auth">
            <section className="auth gradient">
                <div className="container">
                    <form className="auth_form form" onSubmit={handleSubmit}>
                        <div className="auth_form_title">
                            <span>Вход в аккаунт</span>
                        </div>
                        <div className="auth_form_controls">
                            <div className="control">
                                <label className="control_title" htmlFor="mail">Электронная почта</label>
                                <input
                                    className={error && !email ? 'err' : 'ok'}
                                    id="mail"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Введите ваш e-mail"
                                    required
                                />
                            </div>
                            <div className="control">
                                <label className="control_title" htmlFor="password">Пароль</label>
                                <input
                                    className={error && !password ? 'err' : ''}
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Введите пароль..."
                                    required
                                />
                            </div>
                            <div className="auth_form_control">
                                <button className="form_btn btn btn-main btn-fw" type="submit">
                                    Войти
                                </button>
                            </div>
                            <div className="auth_form_control auth_form_control-reset">
                                <p>Забыли пароль? <a href="#">Восстановить</a></p>
                            </div>
                        </div>
                        <div className="auth_form_footer">
                            <a href="#">SL-Клиника</a>
                            <p>Клиника консервативного лечения заболеваний позвоночника и суставов</p>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AuthForm;
