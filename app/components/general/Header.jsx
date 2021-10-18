import headerStyles from "../../styles/header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <div className={headerStyles.commonBlock}>
            <div>Ustinov Corp.</div>
            <div className={headerStyles.centerBlock}>
                <div>
                    <Link href="/contacts">
                        <a>Контакты</a>
                    </Link>
                </div>
                <div>
                    <Link href="/about">
                        <a>О нас</a>
                    </Link>
                </div>
                <div>
                    <Link href="/process">
                        <a>Процесс</a>
                    </Link>
                </div>
            </div>
            <div className={headerStyles.rightBlock}>
                <div>
                    <Link href="/">
                        <a>На главную</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
