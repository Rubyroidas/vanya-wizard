import React from 'react';
import {Link} from 'react-router-dom';

export const HomePage = () => (
    <div>
        <h1>Приветствую! Вас приветствует гид для новичков в мире иммиграции в Канаду.</h1>
        <Link to="/wizard/begin" compo>Начать</Link>
    </div>
);
