import './Footer.css';

export function Footer() {
    return (
        <div id="footer">
            <div id="footerContactInfo">
                <p className='espace'>Qui sommes-nous ?</p>
                <p className='espace'>Nous contacter</p>
            </div>
            <div id="footerOptions">
                <div>
                    <p className='espacede'>Protection des données</p>
                    <p >Politique des cookies</p>
                    <br /><br />
                </div>
                <div className="footerPipe" />
                <div>
                    <p className='espacede'>Conditions générales</p>
                    <p >Mentions légales</p>
                    <br /><br />
                </div>
                <div className="footerPipe" />
                <div>
                    <p className='espacede'>Langue</p>
                    <p >Accessibilité</p>
                    <br /><br />
                </div>
            </div>
            <div id="footerCopyright">
                © Copyright 2024 Patrimoni | Tous droits réservés
            </div>
        </div>
    );
}
