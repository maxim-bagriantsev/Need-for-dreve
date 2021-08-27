import React, {useState} from 'react';
import './languageSelector.scss';

export const LanguageSelector = () => {
    const [language, setLanguage] = useState('Eng')

    const hendleChangeLanguage = () => {
        if (language === 'Eng') {
            setLanguage('Рус')
        } else {
            setLanguage('Eng')
        }
    }

    return (
        <div className='languageSelector'>
            <span className="without-class" onClick={hendleChangeLanguage}>{language}</span>
        </div>
    )
}


