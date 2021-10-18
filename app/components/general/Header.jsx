import headerStyles from "../../styles/header.module.css";

export default function Header() {
    return (
        <div className={headerStyles.commonBlock}>
            <div>Ustinov Corp.</div>
            <div className={headerStyles.centerBlock}>
                <div>
                    <a href="/contacts">Контакты</a>
                </div>
                <div>
                    <a href="/about">О нас</a>
                </div>
                <div>
                    <a href="/otherInfo">Другое</a>
                </div>
            </div>
            <div className={headerStyles.rightBlock}>
                <div>
                    <a href="/">На главную</a>
                </div>
            </div>
        </div>
    );
}
