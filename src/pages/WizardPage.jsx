import React from 'react';
import {Link, useParams} from 'react-router-dom';

import {steps} from '../steps';

export const WizardPage = () => {
    const {step} = useParams();

    const stepDetails = steps[step];

    if (!stepDetails) {
        return (
            <div>
                Я ничего об этом не знаю. Наверное, вы потерялись на сайте, свернули не туда. Попробуйте перейти на предыдущую страницу, или начать с <Link to="/">главной</Link>.
            </div>
        )
    }

    const decisions = stepDetails.decisions ?? [];

    return (
        <div>
            <div className="body">{stepDetails.body}</div>
            <ul>
            {decisions.map(decision => (
                <li key={decision.gotoStep}>
                    <Link to={`/wizard/${decision.gotoStep}`}>{decision.text}</Link>
                </li>
            ))}
                {!decisions.length && (
                    <Link to="/wizard/begin">начать с начала</Link>
                )}
            </ul>
        </div>
    );
};
