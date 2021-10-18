import headerStyles from "../../styles/header.module.css";

export default function Header() {
    return (
        <div className={headerStyles.commonBlock}>
            <div>Ustinov Corp.</div>
            <div className={headerStyles.rightBlock}>
                <div>
                    <a href="/about">About</a>
                </div>
                <div>
                    <a href="/contacts">Contacts</a>
                </div>
                <div>
                    <a href="/otherInfo">Other info</a>
                </div>
            </div>
        </div>
    );
}
