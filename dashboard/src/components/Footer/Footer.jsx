import React from "react";
import iconImage from "../../Assets/images/la_vie_icon.png"
import "../../Assets/css/app.css"

function Footer() {
    return (
        <footer>
            <div className="info-footer">
                <div className="iconos-info">
                    <ion-icon name="location-outline"></ion-icon>
                    <p>Posadas,Misiones</p>
                    <ion-icon name="mail-outline"></ion-icon>
                    <p>lavienaturelle@gmail.com</p>
                    <ion-icon name="call-outline"></ion-icon>
                    <p>3764107823</p>
                </div>
            </div>
            <div className="logo-footer">
                <img style={{ width: "3rem" }}src={iconImage} alt="logo" className="icon-footer"/>
            </div>
            <div className="legal-footer">
                <div>
                    <div>
                        <h4 className="subtitulo-footer">RGPD</h4>
                    </div>
                    <div className="rgpd">
                        <a href="/politica">politica de privacidad</a>
                        <a href="/terminos">terminos y condiciones</a>
                    </div>
                </div>
            </div>
            <div className="nosotros-footer">
                <div>
                    <div className="subtitulo-footer">
                        <h4>Nosotros</h4>
                    </div>
                    <div className="nosotros">
                        <a href="/nosotros">historia</a>
                        <a href="/nosotros/mision">mision,vision y valores</a>
                        <a href="/contacto">contactenos</a>
                    </div>
                </div>
            </div>
            <div className="redes-sociales2">
                <div>
                    <div>
                        <h4>Redes Sociales</h4>
                    </div>
                    <div className="redes-sociales">
                        <div className="wpp-icon">
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </div>
                        <div className="ig-icon">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;