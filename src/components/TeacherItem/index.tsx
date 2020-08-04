import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C5103AQH4pmZITuTpDA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=gZLgzp6E_R_7vRRE2PT5yUwMwdTheWFPv6gDerCjZDA" alt="Giovanni Caldeira"/>
                <div>
                    <strong>Giovanni Caldeira</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Blá, blá, blá
                <br /> <br />
                Mais um pouco de blá blá blá aqui também, só para ter texto mesmo, porque preciso saber se vai ficar legal essa parte. Obrigado por ler.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;